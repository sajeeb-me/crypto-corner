import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <nav className='flex align-center justify-center md:justify-between md:px-[100px] py-4 bg-cyan-700 text-white'>
            <div className='hidden md:flex'>
                <Link to='/'>
                    <h2 className='text-xl font-semibold'>Crypto Corner</h2>
                </Link>
            </div>
            <div className='flex gap-3'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About us</CustomLink>
            </div>

        </nav>
    );
};

export default Header;