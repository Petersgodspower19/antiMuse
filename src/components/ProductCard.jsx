import React from 'react'
import { FaStar } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import { formatCurrency } from '../helpers';
import { addToCart } from '../cartSlice';
import toast from 'react-hot-toast';

function ProductCard({product}) {

  const {cart} = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();


  function handleAdd() {
    dispatch(addToCart(product));
    toast.success("Item successfully added to Cart");
}

    return (
        <div
          className="h-[370px] 2xl:h-[420px] z-[-10] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
          key={product.id}
        >
          <div>
            <img
              src={product.img}
              alt="img"
              className=" h-56 2xl:h-64 rounded-t-xl w-full"
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" font-semibold text-xl pt-4">{product.name}</h1>
            <div className=" flex gap-10 pt-2">
              <h2 className=" font-medium text-lg">{formatCurrency(product.price)}</h2>
              <h2 className=" font-medium text-DarkColor">{product.discount}</h2>
            </div>
    
            <div className=" flex gap-8 pt-4">
              <button onClick={handleAdd}
                className=" bg-DarkColor text-white px-4 py-2 font-medium active:bg-amber-800"
              >
                Add to Cart
              </button>
              <div className=" flex gap-1 items-center">
                <h2>5.0</h2>
                <FaStar className=" text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      );
    };

export default ProductCard
