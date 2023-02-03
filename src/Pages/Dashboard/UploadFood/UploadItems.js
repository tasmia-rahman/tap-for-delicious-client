import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { MdOutlineFastfood, MdOutlineDescription } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';


const UploadItems = () => {

    const { user } = useContext(AuthContext);

    const email = user?.email;
    const [res, setRes] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/restaurant/${email}`)
            .then(res => res.json())
            .then(data => setRes(data))
    }, [email])

    const restaurant = res?.title;

    const imageHostKey = "3854192c81d6a82970830b8c614a4811";

    const handleFoodUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.food.value;
        const details = form.description.value;
        const price = form.price.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const food = {
                        image: imgData.data.url,
                        name,
                        details,
                        price,
                        restaurant,
                        resEmail: email
                    }
                }
            });

    }

    return (
        <div>
            <h1 className='text-start mx-auto py-3  font-extrabold text-transparent text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-700 via-orange-400 to-red-500'>Upload Food Item</h1>
            <form onSubmit={handleFoodUpload}>
                <div className="flex items-center border-2 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <MdOutlineFastfood />
                    <input className="pl-2 outline-none border-none" type="text" name="food" id="" placeholder="Name of the food" required />
                </div>
                <div className="flex items-center border-2 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <TbCurrencyTaka />
                    <input className="pl-2 outline-none border-none" type="text" name="price" id="" placeholder="Set price ৳" required />
                </div>
                <div className="flex items-center border-2 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <MdOutlineDescription />
                    <textarea type="text" name="description" id="" placeholder="Small description about the food" required className="pl-2 outline-none border-none textarea textarea-bordered textarea-sm w-full" ></textarea>
                </div>
                <div className="flex items-center border-0 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <input type="file" name='image' required className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                </div>

                <button type='submit' className='btn max-w-sm mx-auto flex justify-center ml-5 border-2 bg-yellow-400 border-yellow-400 bg-transparent text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 '>
                    Upload
                </button>
            </form>
        </div>
    );
};

export default UploadItems;