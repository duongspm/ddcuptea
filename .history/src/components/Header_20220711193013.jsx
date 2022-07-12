import React from 'react';
import Logo from '../assets/imgs/logo.png';

const Header = () => {
    return (
        <div className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img/>
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </div>
    );
};

export default Header;