import React, { useState } from 'react';
import { SiMusescore } from "react-icons/si";
import { useDispatch } from 'react-redux';
import { createUser } from '../accountSlice';


function LogIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (username) {
            dispatch(createUser(username));
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
            <div className='flex items-center justify-center gap-1 mb-6'>
                <SiMusescore size={32} color='#d4a373' />
                <h1 className='text-[30px] font-bold text-gray-800'>AntiMuse</h1>
            </div>
            <form className='bg-white shadow-lg rounded-lg p-6 w-[300px] md:w-80' onSubmit={handleSubmit}>
                <fieldset className='mb-4'>
                    <legend className='text-lg font-semibold text-gray-700'>Name</legend>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='border border-[#d4a373] rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#d4a373]' 
                    />
                </fieldset>
                <button 
                    type="submit" 
                    className='w-full bg-[#d4a373] text-white font-semibold rounded-md p-2 hover:bg-[#c29a5b] transition duration-200'
                >
                    Log In
                </button>
            </form>
        </div>
    );
}

export default LogIn;
