import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeitem } from "../Utils/Cartslice";
import { FaTrash } from "react-icons/fa";
import Checkout from "./Checkout";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "dsf");
 



  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeitem(item));
  };

  return (
    <>
      <div className="container flex flex-col justify-between m-2 w-[100%] h-[100%] text-center">
        {cartItems.map((book) => (
          <div
            key={book.id}
            className=" container flex-col flex justify-center items-center border-1 border-red-200 p-10"
          >
             <h1 className="font-bold text-lg m-5">
                Cart Items - {cartItems.length}
              </h1>
              <img
                className=" h-[200px] w-[200px] transform transition duration-500 hover:scale-110 "
                src={book.image_url}
                alt="logo"
              />
              <h2 className="mt-5 text-lg ">{book.title}</h2>
              <h1 className="mt-5 text-2xl font-bold">Rs. : 1500.00/-</h1>

            

             
              <button
          className="justify-end items-center hover:bg-gray-800 bg-black text-white w-[200px] p-3 m-2 rounded-lg"
          onClick={(id) => handleRemoveItem(book.id)}
        > Remove Item</button>
               <Checkout/>
            </div>
          
        ))}
        <button
          className="justify-end items-center hover:bg-gray-800 bg-black text-white w-[200px] p-3 m-2 rounded-lg"
          onClick={() => handleClearCart(cartItems)}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
