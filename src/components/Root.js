import React, { Component } from "react";
import store from "store";

import Data from "../data";
import "../css/main.css";

import Header from "./Header";
import Main from "./Main";

export default class Root extends Component {
  constructor() {
    super();

    this.state = {
      products: Data.products || store.get("products"),
      cart: store.get("cart") || [],
      productSearch: []
    };
  }

  ClicktoChangeStateProduct = e => {
    this.changeProduct(e);
  };

  changeProduct(e) {
    this.setState({
      cart: e
    });
  }

  render() {
    const { products, cart } = this.state;
    return (
      <React.Fragment>
        <Header cart={cart} />
        <Main
          products={products}
          ClicktoChangeStateProduct={this.ClicktoChangeStateProduct}
          cart={cart}
        />
      </React.Fragment>
    );
  }
}
