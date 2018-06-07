import React, { Component } from "react";

import Product from "../Product";

export default class Home extends Component {
  render() {
    return (
      <Product
        ClicktoChangeStateProduct={this.props.ClicktoChangeStateProduct}
        products={this.props.products}
      />
    );
  }
}
