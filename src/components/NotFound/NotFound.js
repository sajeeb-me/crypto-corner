import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate()

    const goToHomePage = () => {
        navigate(`/`)
    }
    return (
        <div className='h-[90vh] flex items-center'>
            <div className='grid md:grid-cols-2 items-center gap-4'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>404!</h1>
                    <p className='text-3xl font-bold text-red-500'>Sorry, Page not Found</p>
                    <button onClick={goToHomePage} className='border py-2 px-4 rounded-md border-cyan-700 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white mt-5'>Back to Home Page</button>
                </div>
                <div className='w-3/4 place-self-center '>
                    <img className='rounded-xl w-75' src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png" alt="" />
                </div>
            </div>
        </div >
    );
};

export default NotFound;