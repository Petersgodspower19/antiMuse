import React from 'react';
import collection from "../assets/img/collection.png";
import Button from './Button';

function Collection() {
  return (
    <div className='text-DarkColor pt-20  flex flex-col md:flex-row items-center justify-center'>
      <img src={collection} alt="Summer Collection" className='w-[300px] md:w-[510px] mx-auto' />

      <div className='w-full  text-center md:text-left md:ml-10 mt-5 md:mt-0 pb-4 px-8'>
        <h1 className='font-bold text-[30px] mb-3'>Best Summer Collection</h1>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id commodi quis recusandae fuga, 
          veritatis similique porro, quisquam dolor, esse cumque. Deserunt, modi aperiam in perspiciatis 
          veritatis sit ipsum blanditiis.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Collection;
