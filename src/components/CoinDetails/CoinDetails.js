import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { coinID } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinID}
        `)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [coinID])
    return (
        <div className='h-[90vh]  flex items-center justify-center'>
            <div className='md:grid grid-cols-3 items-center w-5/6 p-10 rounded-xl bg-cyan-700 text-white max-w-screen-2xl'>
                <div className='col-span-2 my-3'>
                    <h2 className='text-3xl font-bold'>{coin.name}</h2>
                    <p><small>Symbol: {coin.symbol}</small></p>
                    <p className='w-3/4'>Categories: {coin.categories}</p>
                    <p>Origin: {coin.country_origin ? coin.country_origin : 'Not found'}</p>
                    <h3 className='text-xl font-semibold mt-3'>Current Price: ${coin.market_data?.current_price?.usd}</h3>
                    <h3>All time heigh: ${coin.market_data?.ath?.usd}</h3>
                    <h3>Market Cap: ${coin.market_data?.market_cap?.usd}</h3>
                </div>
                <div className='flex justify-center my-3'>
                    <img src={coin.image?.large} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;