import React from 'react'
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';

function Home() {

    const navigate = useNavigate();

    return (
        <div><Hero /></div>
    )
}

export default Home
