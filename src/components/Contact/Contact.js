import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='text-3xl font-semibold'>We are available <span className='font-bold text-cyan-700'>24/7</span></h1>
                <p className='my-2'>If you have any quarry or facing any technical problems we suggest you to call our <span className='font-semibold'>Hotline.</span> </p>
                <p>If you want to visit our Office, you are always welcome!</p>
                <div className='flex items-center justify-center gap-5 mt-5'>
                    <Link to='/contact/dubaiOffice'><button className='border py-2 px-4 rounded-md border-cyan-700 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white'>Dubai Office</button></Link>
                    <Link to='/contact/bangladeshOffice'><button className='border py-2 px-4 rounded-md border-cyan-700 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white'>Bangladesh Office</button></Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;