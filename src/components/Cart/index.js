import React from "react";
import CartItem from "./CartItem";
import Helmet from "react-helmet";

export default props => {
  return (
    <section className="cart">
      <Helmet>
        <title>Cart | AMARO</title>
        <meta name="decription" content="Cart | AMARO" />
      </Helmet>
      <CartItem
        cart={props.cart}
        ClicktoChangeStateProduct={props.ClicktoChangeStateProduct}
      />
    </section>
  );
};
