import React from "react";
import Button from "../buttom/Button";
import CartItem from "../cart-item/CartItem";
import "./cartDropdown.scss";
import { useSelector, useDispatch } from "react-redux";
import {withRouter} from 'react-router-dom'
import {toggleCarHidden} from '../../redux/cart/cart.action'
 function CartDropdown({history}) {
 
  const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.cartItems)
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
           
          </>
        ) : (
          <span>No Item selectec</span>
        )}
       
      </div>
      <Button onClick={()=> {
           dispatch(toggleCarHidden())
          history.push('/checkout')
      }}>GO TO CHECKOUT</Button>
    </div>
  );
}


export default withRouter(CartDropdown)
