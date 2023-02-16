import React, { useEffect } from 'react';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { BiSearchAlt2 } from 'react-icons/bi'
import './Search.css'


const Search = () => {

    useEffect(() => {
        $("#foodSearch").autocomplete({
            source: async function (request, response) {
                let data = await fetch(`https://tap-for-delicious-server.vercel.app/search?term=${request.term}`)
                    .then(results => results.json())
                    .then(results => results.map(result => {
                       // console.log(result);
                        return { label: result.name, value: result.name, id: result._id }
                    }));
                response(data);
            },
            minLength: 2,
            select: function (event, ui) {
                console.log(ui.item);
            }
        });
    }, [])

    return (
        <div className='flex justify-center items-center my-10 gap-5'>
            <label for="foodSearch"><BiSearchAlt2 className='text-yellow-300 text-3xl hover:text-4xl hover:text-yellow-500 hover:cursor-pointer' /></label>
            <input type="text" id="foodSearch" className="input input-sm md:input-md input-bordered input-error w-full max-w-md mx-auto" placeholder='Search your food ' />
             
        </div>
    );
};

export default Search;