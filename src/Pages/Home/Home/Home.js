import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import ClientChoice from '../ClientChoice/ClientChoice';
import RegisterRes from '../RegisterRes/RegisterRes';
import { Link } from 'react-router-dom';
import Restaurants from '../Restaurants/Restaurants';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import "jquery-ui-dist/jquery-ui";
import Search from './Search';


const Home = () => {
    const [search, setSearch] = useState([]);

    const { data: restaurants, isFetching } = useQuery({
        queryKey: ["restaurants"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/restaurants',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })

    const [topRestaurants, setTopRestaurants] = useState([]);
    useEffect(() => {
        fetch('https://tap-for-delicious-server.vercel.app/restaurants-limit')
            .then(res => res.json())
            .then(data => setTopRestaurants(data))

    }, [])



    // const handleSearch = (event) =>{
    //     fetch(`https://tap-for-delicious-server.vercel.app/search?term=${event.target.value}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             //setSearch(data)
    //             console.log(data)
    //             console.log(event.target.value)
    //         })
    //         .catch(error => console.log(error))
    // }

    if (isFetching) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-screen scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-amber-300 scrollbar-track-gray-100'>
            <div>
                <div className='relative scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-amber-300 scrollbar-track-gray-100'>
                    <div className='flex justify-center'>
                        <Banner />
                    </div>
                    <div className='absolute top-4 left-[45%] md:top-20 justify-center z-30 flex items-center gap-3'>
                        {/* <input id='search' type="text" placeholder="Search" className="input input-sm md:input-md input-bordered input-error w-full max-w-xs" />
                        <div><BiSearchAlt2 className='text-white text-3xl hover:text-4xl hover:text-yellow-300 hover:cursor-pointer' /></div> */}
                    </div>

                    <div className='flex justify-center'>
                        <Search></Search>
                    </div>
                </div>

                <RegisterRes />

                <FoodItem></FoodItem>
                <Link to='/topfood'> <div className="btn bg-amber-400 max-w-sm mx-auto flex justify-center mt-12 mb-32 border-2 border-amber-400 text-white rounded-2xl hover:bg-base-100 hover:text-yellow-400 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-yellow-400 hover:shadow-lg duration-300">See All Top Foods</div></Link>
                {/* <TopRestaurant></TopRestaurant> */}
                <div>

                    <h4 className='text-xl text-center mt-10 font-medium'>Top Restaurants</h4>
                    <h1 className="text-3xl text-center my-5 font-medium">Choose From Most Popular <span className='text-red-600'>Restaurant</span></h1>
                </div>

                <div>
                    <Restaurants
                        restaurants={topRestaurants}
                        isFetching={isFetching}>
                    </Restaurants>
                </div>

                <Reviews></Reviews>
                <Blog></Blog>
                <ClientChoice></ClientChoice>
            </div>
        </div>
    );
};

export default Home;