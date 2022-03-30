import React, { useEffect, useState } from 'react';

const Search = () => {
    const [value, setValue] = useState([])
    const [currencies, setCurrencies] = useState({})
    useEffect(() => {
        fetch(`https://api.currenciesgecko.com/api/v3/currenciess/${value}`)
            .then(res => res.json())
            .then(data => setCurrencies(data))
    }, [value])
    const getValue = e => {
        setValue(e.target.value)
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className='mt-10'>
                    <input onChange={getValue} className='border-2 border-cyan-700 bg-cyan-700 text-white rounded-xl w-[500px] py-3 pl-3 mx-2' type="text" />
                    <button className='border-2 border-cyan-700 text-cyan-700 font-semibold py-3 px-5 rounded-xl mx-2 hover:bg-cyan-700 hover:text-white'>Search</button>
                </div>
            </div>
            <div className='h-[90vh]  flex items-center justify-center'>
                <div className='md:grid grid-cols-3 items-center w-5/6 p-10 rounded-xl bg-cyan-700 text-white max-w-screen-2xl'>
                    <div className='col-span-2 my-3'>
                        <h2 className='text-3xl font-bold'>{currencies.name}</h2>
                        <p><small>Symbol: {currencies.symbol}</small></p>
                        <p className='w-3/4'>Categories: {currencies.categories}</p>
                        <p>Origin: {currencies.country_origin ? currencies.country_origin : 'Not found'}</p>
                        <h3 className='text-xl font-semibold mt-3'>Current Price: ${currencies.market_data?.current_price?.usd}</h3>
                        <h3>All time heigh: ${currencies.market_data?.ath?.usd}</h3>
                        <h3>Market Cap: ${currencies.market_data?.market_cap?.usd}</h3>
                    </div>
                    <div className='flex justify-center my-3'>
                        <img src={currencies.image?.large} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;