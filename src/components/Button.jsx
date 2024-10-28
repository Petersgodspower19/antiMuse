import React, { useState } from 'react'


function Button({onClick}) {
   

    if(!onClick) return (
        <button onClick={onClick} className='text-center bg-DarkColor text-white p-2 text-[13p]'>
            <a href="#shop" className='no-underline text-white'>Shop Now</a>
        </button>
    )
  return (
    <div>
      
    </div>
  )
}

export default Button
