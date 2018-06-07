import React, { Component } from "react";

import ProductItem from "./ProductItem";

export default class Product extends Component {
  renderProducts() {
    const { products } = this.props;
    return products.map((product, index) => {
      return <ProductItem key={index} product={product} />;
    });
  }

  render() {
    return <section className="product">{this.renderProducts()}</section>;
  }
}
