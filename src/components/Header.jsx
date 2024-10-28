import React from 'react';
import { SiMusescore } from "react-icons/si";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Links from './Links';
import { IoMenu } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Header({ onMenuClick, showCart }) {
  const cart = useSelector(state => state.cart.cart);
  return (
    <header className='flex items-center justify-between px-3 py-4 lg:px-16 
    lg:py-4 w-full fixed z-10 bg-PrimaryColor shadow-lg text-DarkColor'>
      <div className='flex items-center gap-1'>
       <SiMusescore size={32} color='#d4a373' />
       <h1 className='text-[25px] font-bold'>AntiMuse</h1>
      </div>
      <div className='md:flex items-center gap-2 md:gap-4 hidden'>
        <Links to="home">Home</Links>
        <Links to="shop">Shop</Links>
        <Links to="features">Features</Links>
        <Links to="products">Products</Links>
        <Links to="reviews">Reviews</Links>
      </div>
      <div className='flex items-center gap-4'>
        <FaUserLarge size={25} color='#d4a373' />
        <div className='flex items-center relative'>
        <FaShoppingCart onClick={showCart} className='cursor-pointer' size={25} color='#d4a373' />
          <span className='bg-red text-white absolute right-[-8px] top-[-8px] rounded-full h-5 w-5 flex items-center justify-center text-xs'>
            {Object.keys(cart).length}
          </span>
        </div>
      </div>
      <IoMenu color='#d4a474' size={30} className='md:hidden' onClick={onMenuClick} />
    </header>
  );
}

export default Header;
