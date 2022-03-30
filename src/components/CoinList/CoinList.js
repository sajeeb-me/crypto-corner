import React from 'react';
import { Link } from 'react-router-dom';

const CoinList = ({ coin }) => {
    const { image, symbol, name, id } = coin;
    return (
        <Link to={`/coinDetails/${id}`}>
            <div className='max-w-[300px] border-2 border-cyan-700 flex items-center justify-around py-3 rounded-lg hover:bg-cyan-700 hover:text-white p-2'>
                <div className='w-[70px]'>
                    <img src={image} alt="" />
                </div>
                <div className='text-left'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p><small>Symbol: {symbol}</small></p>
                </div>
            </div>
        </Link>
    );
};

export default CoinList;