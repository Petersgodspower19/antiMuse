import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { TbMoodEmptyFilled } from 'react-icons/tb';
import { clearCart } from '../cartSlice';
import toast from 'react-hot-toast';

function Cart({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
   const dispatch = useDispatch();

  const totalAmount = Object.values(cart).reduce((acc, item) => 
    acc + item.price * item.quantity, 0).toFixed(2);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  function handleClear() {
      dispatch(clearCart());
      toast.success("Cart has been cleared");
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full cart ${isClosing ? 'fade-out' : ''} bg-footer`}
      data-aos="fade-left"
      data-aos-duration="600"
    >
      <p className='mb-8 capitalize text-DarkColor text-lg font-bold cursor-pointer' onClick={handleClose}>Close Cart</p>
      <div>
        {Object.values(cart).length === 0 ? (
          <div className="text-center text-lg flex items-center gap-3">
            <TbMoodEmptyFilled size={32} color='#d4a474' />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.keys(cart).map((item) => (
              <CartItem product={cart[item]} key={cart[item].id} />
            ))}
            <div className="mt-5 flex justify-between font-bold text-[16px]">
        <p>Total:</p>
        <p>${totalAmount}</p>
      </div>
      <div className='flex flex-col gap-3 mt-8'>
      <button className='text-center p-2 w-[80%] border-0 m-auto bg-DarkColor text-white'>Proceed To Buy</button>
      <button className='bg-white p-2 text-black border-1 clear w-[80%] m-auto text-center'
      onClick={handleClear}>Clear Cart</button>
      </div>
          </div>
        )}
      </div>
      
      </div>
  );
}

export default Cart;
