import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../cartSlice';
import toast from 'react-hot-toast';
import { formatCurrency } from '../helpers';

function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(product));
    toast.success('Item has been removed from your cart');
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={product.img} alt={product.name} className="w-[100px]" />
        <div>
          <h1 className='text-[16px] font-bold'>{product.name}</h1>
          <p className='text-[12px]'>Quantity: {product.quantity}</p>
          <p className='text-[14px]'>Price: {formatCurrency(product.price)}</p>
        </div>
      </div>
      <IoMdClose color="black" size={32} onClick={handleRemove} />
    </div>
  );
}

export default CartItem;
