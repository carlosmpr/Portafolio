import React from "react";
import "./checkOut.scss";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

export default function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = () => {
    const result = cartItems.reduce(
      (accumalated, cartItem) =>
        accumalated + cartItem.quantity * cartItem.price,
      0
    );

    return result;
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total()}</div>
    </div>
  );
}
