import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="header__cart">
      <Link to="/cart">
        <i className="fa fa-shopping-cart fa-fw fa-3x" />
        {props.cart.length === 0 ? (
          <span className="header__cart__itens no-cart">
            {props.cart.length}
          </span>
        ) : (
          <span className="header__cart__itens">{props.cart.length}</span>
        )}
        <span className="header__cart__itens" />
      </Link>
    </div>
  );
};
