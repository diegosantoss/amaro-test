import React, { Component } from "react";

export default class ProductInfo extends Component {
  showInfo() {
    const product = this.props.product;
    return <h1>{product.name}</h1>;
  }

  render() {
    return <div className="product__item--name">{this.showInfo()}</div>;
  }
}
