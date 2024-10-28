import React from 'react'
import { SiMusescore } from "react-icons/si";
import Links from './Links';
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";


function Footer() {
  return (
    <footer className='w-full flex text-center md:text-start items-center flex-col gap-4 md:flex-row justify-between bg-PrimaryColor  px-3 py-4 lg:px-16 lg:py-4'>
    <div className='flex flex-col gap-3 justify-center'>
    <div className='flex'>
    <SiMusescore size={32} color='#d4a373' />
    <h1 className='text-[25px] font-bold text-DarkColor'>AntiMuse</h1>
    </div>
    <div className='flex items-center gap-3'>
        <FaFacebook size={25} color='#d4a373' />
        <RiTwitterXLine size={25} color='#d4a373' />
        <RiInstagramFill size={25} color='#d4a373' />
    </div>
    </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-DarkColor text-xl'>Shop</h1>
        <Links to="home">Home</Links>
        <Links to="shop">Shop</Links>
        <Links to="features">Features</Links>
        <Links to="products">Products</Links>
        <Links to="reviews">Reviews</Links>
        </div>
    <div className='flex flex-col gap-3'>
       <h1 className='font-bold text-DarkColor text-xl'>Contact Us</h1>
       <div className='flex flex-col gap-2'>
        <p className='text-DarkColor'>123 Elm Street, Suite 456 Springfield, IL 62701 United States</p>
        <p className='text-DarkColor'>AntiMuse@gmail.com</p>
        <p className='text-DarkColor'>+123- 456- 789</p>
       </div>
       </div>
    </footer>
  )
}

export default Footer
