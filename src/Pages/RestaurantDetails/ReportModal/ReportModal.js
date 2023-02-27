import React from 'react';
import { toast } from 'react-hot-toast';

const ReportModal = ({ buyer, restaurant }) => {

    const handleReport = (event) => {
        event.preventDefault();

        const form = event.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const objection = form.objection.value;

        const report = {
            displayName,
            email,
            restaurantName: restaurant?.title,
            objection
        }

        fetch('https://tap-for-delicious-server.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.error(`You reported ${restaurant?.title}`);
                    form.reset();
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm  btn-circle absolute right-2 top-2 border-2 bg-red-600 border-red-600 text-white hover:bg-base-100 hover:text-red-500 hover:border-red-400 text shadow-sm shadow-red-600 hover:shadow-lg hover:shadow-red-600 duration-300">✕</label>
                    <br />
                    <h3 className='text-3xl px-4 mb-4'>Report <span className='text-red-600'>{restaurant?.title}</span></h3>
                    <form onSubmit={handleReport} className="space-y-4">
                        <div className="md:px-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="displayName"
                                defaultValue={buyer?.displayName}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                readOnly
                            />
                        </div>
                        <div className="md:px-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                            />
                        </div>
                        <div className="md:px-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                <span className="label-text">Your Objection</span>
                            </label>
                            <textarea
                                name="objection"
                                className="h-36 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <button
                                className='py-2 px-6 border-2 bg-red-600 border-red-600 text-white rounded-2xl hover:bg-base-100 hover:text-red-500 hover:border-red-400 text shadow-sm shadow-red-400 hover:shadow-lg hover:shadow-red-400 duration-300'
                                type='submit'
                            >
                                <label htmlFor="report-modal">
                                    Submit
                                </label>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ReportModal;