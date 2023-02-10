import React, { useEffect } from 'react';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { BiSearchAlt2 } from 'react-icons/bi'

const Search = () => {

    useEffect(() => {
        $("#foodSearch").autocomplete({
            source: async function (request, response) {
                let data = await fetch(`http://localhost:5000/search?term=${request.term}`)
                    .then(results => results.json())
                    .then(results => results.map(result => {
                        return { label: result.name, value: result.name, id: result._id }
                    }));
                response(data);
            }
        });
    }, [])

    return (
        <div className='flex justify-center items-center my-10 gap-5'>
            <label for="foodSearch"><BiSearchAlt2 className='text-yellow-300 text-3xl hover:text-4xl hover:text-yellow-500 hover:cursor-pointer' /></label>
            {/* <div className='absolute top-4 left-[45%] md:top-20 justify-center z-30 flex items-center gap-3'>
                        <input id="datepicker" type="text" placeholder="Search" className="input input-sm md:input-md input-bordered input-error w-full max-w-xs" />
                        <div><BiSearchAlt2 className='text-white text-3xl hover:text-4xl hover:text-yellow-300 hover:cursor-pointer' /></div>
                    </div> */}
            {/* <label for="datepicker">Recipe</label> */}
            <input type="text" id="foodSearch" className="input input-sm md:input-md input-bordered input-error w-full max-w-xs mx-auto" />

        </div>
    );
};

export default Search;