import React from 'react'
import Button from './Button'
import hero from "../assets/img/hero1.png"

function Home() {
  return (
    <div id='home' className='text-DarkColor md:px-13 md:py-13 pt-20 flex flex-col md:flex-row items-center
     justify-around'>
       <div className='w-full md:w-[500px] px-8'>
         <h1 className='font-bold text-[30px] mb-3'>Discovering and Defining Your Own Fashion!</h1>
         <p className='md:text-start mb-3'>Each Item is a carefully chosen masterpiece promoting not 
            just fashion but a reflection of your unique style.</p>
            <Button />
       </div>
       <div className='bg-DarkColor rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 mt-10 ml-0'>
       <img src={hero} alt='' className='w-[510px] -ml-5 -mb-5' />
       </div>
      
    </div>
  )
}

export default Home
