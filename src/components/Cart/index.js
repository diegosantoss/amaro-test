import React, { Component } from "react";
import CartItem from "./CartItem";
import Helmet from "react-helmet";

export default class Cart extends Component {
  renderCart = () => {
    const { cart, ClicktoChangeStateProduct } = this.props;

    return (
      <section className="cart">
        <Helmet>
          <title>Cart | AMARO</title>
          <meta name="decription" content="Cart | AMARO" />
        </Helmet>
        <CartItem
          cart={cart}
          ClicktoChangeStateProduct={ClicktoChangeStateProduct}
        />
      </section>
    );
  };

  render() {
    return this.renderCart();
  }
}
