import React, { Component } from "react";

export default class ProductImage extends Component {
  render() {
    const { image, title } = this.props.product;
    return (
      <div className="product__item--image">
        <img src={image} title={title} alt={title} />
      </div>
    );
  }
}
