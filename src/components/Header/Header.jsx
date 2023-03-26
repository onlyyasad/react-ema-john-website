import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <>
            <div className="navbar bg-[#1C2B35] px-14 text-white">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className='flex justify-between gap-8'>
                    <a className='cursor-pointer hover:text-orange-400 transition duration-150 ease-in-out'>Order</a>
                    <a className='cursor-pointer hover:text-orange-400 transition duration-150 ease-in-out'>Order Review</a>
                    <a className='cursor-pointer hover:text-orange-400 transition duration-150 ease-in-out'>Manage Inventory</a>
                    <a className='cursor-pointer hover:text-orange-400 transition duration-150 ease-in-out'>Login</a>
                </div>

            </div>
        </>
    );
};

export default Header;