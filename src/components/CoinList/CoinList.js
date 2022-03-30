import React from 'react';

const CoinList = ({ coin }) => {
    const { image, symbol, name } = coin;
    return (
        <div className='max-w-[300px] border-2 border-cyan-700 flex items-center justify-around py-3 rounded-lg'>
            <div className='w-[70px]'>
                <img src={image} alt="" />
            </div>
            <div className='text-left'>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <p><small>Symbol: {symbol}</small></p>
            </div>
        </div>
    );
};

export default CoinList;