import React from "react";
import MenuCart from "./MenuCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);
  return (
    <div className=" bg-yellow-50 pl-16 flex flex-col pt-5 items-center">
      {cartItem.map((item) => (
        <MenuCart {...item} key={item.id} />
      ))}
      <div className="flex justify-around items-center">
        <button className="bg-orange-300 rounded-2xl p-2 m-2 font-bold">
          Place Order
        </button>
        <h2>
          Total Amount: <span className="font-bold">Rs. 765</span>
        </h2>
      </div>
    </div>
  );
};

export default Cart;
