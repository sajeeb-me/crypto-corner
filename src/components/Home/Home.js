import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const goToCoins = () => {
        navigate(`/coins`)
    }

    return (
        <div className='h-[80vh] flex flex-col gap-5 items-center justify-center'>
            <div className='flex gap-2 items-center justify-center'>
                <h1 className='text-5xl font-mono font-bold text-center'>Welcome to <span className='text-cyan-700'>Crypto Corner</span></h1>
                <CurrencyDollarIcon className="h-10 w-10 hidden md:flex" />
            </div>
            <button onClick={goToCoins} className='border py-2 px-4 rounded-md border-cyan-700 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white'>Explore Coins</button>
        </div>
    );
};

export default Home;