import React from "react";
import "./checkOut.scss";
import {useDispatch} from 'react-redux'
import {clearItemFromCart ,removeItem,addItem} from '../../redux/cart/cart.action'
export default function CheckoutItem({cartItem})
{
    const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img  src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
          <div className="arrow"onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</div>
          <span className="value">
          {cartItem.quantity}
          </span>
          <div className="arrow" onClick={()=> dispatch(addItem(cartItem))}>&#10095;</div>
          </span>
      <span className="price">{cartItem.price}</span>
      <span className="remove-button" onClick={()=> dispatch(clearItemFromCart(cartItem))}>&#10005;</span>
    </div>
  );
}
