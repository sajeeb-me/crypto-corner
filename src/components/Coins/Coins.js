import React, { useEffect, useState } from 'react';
import CoinList from '../CoinList/CoinList';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div className='p-5 text-center'>
            <h1 className='text-3xl font-semibold my-5 text-cyan-700'>List of top {coins.length} Currencies</h1>
            <div className='flex justify-center'>
                <div className='my-5 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        coins.map(coin => <CoinList key={coin.id} coin={coin} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coins;