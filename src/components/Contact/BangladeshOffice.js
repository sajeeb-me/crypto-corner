import React from 'react';

const BangladeshOffice = () => {
    return (
        <div className='mt-10 flex justify-center items-center'>
            <div className='border-2 border-cyan-700 rounded-xl w-3/4 pt-10 pb-2 max-w-screen-2xl'>
                <h2 className='font-bold text-3xl text-center text-cyan-700'>Bangladesh Office</h2>
                <div className='md:flex justify-evenly items-center gap-10 my-10 px-10 md:px-2'>
                    <div>
                        <p><span className='font-bold text-xl'>Address:</span> </p>
                        <p><span className='font-semibold'>Street:</span>  Khilgaon Tilpapara, road # 9, zone - a, 1219</p>
                        <p><span className='font-semibold'>City:</span>   Dhaka</p>
                        <p><span className='font-semibold'>State/province/area:</span>    Dhaka</p>
                    </div>
                    <div>
                        <p><span className='font-semibold'>Phone number:</span>  017 12075876</p>
                        <p><span className='font-semibold'>Zip code: </span> 1219</p>
                        <p><span className='font-semibold'>Country calling code:</span>  +880</p>
                        <p><span className='font-semibold'>Country:</span>  Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BangladeshOffice;