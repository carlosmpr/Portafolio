import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import "./header.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

export default function Header() {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart.hideen);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        BRAND
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {user ? (
          <div
            className="option"
            onClick={() => auth.signOut()}
            style={{ cursor: "pointer" }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>

      {cart ? null : <CartDropdown />}
    </div>
  );
}
