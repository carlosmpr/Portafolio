import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
export default function Header() {
    return (
        <div className='header'>
            <Link className='logo-container'to='/'>
                BRAND
            </Link>

            <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
               CONTACT
            </Link>
            </div>
        </div>
    )
}
