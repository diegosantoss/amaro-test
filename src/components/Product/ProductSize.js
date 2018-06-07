import React, { Component } from "react";

export default class ProductSize extends Component {
  renderSizeProduct() {
    const { product } = this.props;
    const available = product.sizes.filter(size => size.available === true);
    return (
      <div className="product__item__size">
        {available.map((size, index) => {
          return <p key={index}>{size.size}</p>;
        })}
      </div>
    );
  }

  render() {
    return this.renderSizeProduct();
  }
}
