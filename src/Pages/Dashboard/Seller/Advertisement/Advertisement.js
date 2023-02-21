import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useUser from '../../../../Hooks/useUser';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';

const Advertisement = () => {
    const { user } = useContext(AuthContext);
    const { isSeller, seller } = useUser(user?.email);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddAdvertise = (event) => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const advertise = {
                        sellerId: seller?._id,
                        sellerName: seller?.displayName,
                        sellerEmail: seller?.email,
                        restaurantName: seller?.restaurantName,
                        joinDate: seller?.joinDate,
                        advertiseImg: imgData.data.url,
                        isAdvertised: false
                    }

                    // save adverstise information to the database
                    fetch('https://tap-for-delicious-server.vercel.app/advertises', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(advertise)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Advertisement request sent.');
                                form.reset();
                            }
                        })
                }
            })
    }

    // if (isFetching) {
    //     return <Loading></Loading>
    // }

    return (
        // advertises[0]?.restaurantName === restaurantName && advertises[0]?.isAdvertised === true ?
        //     <div className='flex justify-center mt-2 mb-4'>
        //         <img src={advertises[0]?.advertiseImg} alt="" className='shadow-lg' />
        //     </div>
        //     :
        //     isSeller && seller?.restaurantName === restaurantName && !advertises[0]?.restaurantName && <>
        <div className='ml-6'>
            <h3 className="text-3xl font-semibold">Add Advertisement</h3>
            <form onSubmit={handleAddAdvertise}>
                <div className="form-control max-w-xs my-2">
                    <label className="label" htmlFor='image'>
                        Choose Advertise Image
                    </label>
                    <input type="file"
                        name="image"
                        className="file-input file-input-bordered file-input-warning w-full max-w-xs mb-1"
                        required
                    />
                </div>

                <button
                    className="btn w-2/6 my-3 mx-2 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300"
                    type="submit"
                >
                    Request
                </button>
            </form>
        </div>
    );
};

export default Advertisement;