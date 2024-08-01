import React from 'react'
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import FetchData from './FetchData';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Hero />
            <FetchData />
        </div>
   )
};


export default Home
