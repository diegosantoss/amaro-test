import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <div className="header__cart">
        <Link to="/cart">
          <i className="fa fa-shopping-cart fa-fw fa-3x" />
          {this.props.cart.length === 0 ? (
            <span className="header__cart__itens no-cart">
              {this.props.cart.length}
            </span>
          ) : (
            <span className="header__cart__itens">
              {this.props.cart.length}
            </span>
          )}
          <span className="header__cart__itens" />
        </Link>
      </div>
    );
  }
}
