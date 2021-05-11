import React from 'react'
import './cart.scss'
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg'
import {toggleCarHidden} from '../../redux/cart/cart.action'
import {useDispatch, useSelector} from 'react-redux'
export default function CartIcon() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)

    const itemsCount = ()=> {
        const result = cartItems.reduce((accumalated,cartItem) =>accumalated + cartItem.quantity ,0)

        return result
    }
    return (
        <div className="cart-icon" onClick={ ()=> dispatch(toggleCarHidden())}>
           <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount()}</span>
        </div>
    )
}
