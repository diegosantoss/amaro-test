import React, { Component } from "react";

export default class ProductPrice extends Component {
  checkPrice() {
    const { product } = this.props;
    let regularPrice = product.regular_price.split(" ");
    let actualPrice = product.actual_price.split(" ");

    regularPrice = parseFloat(regularPrice[1], 10);
    actualPrice = parseFloat(actualPrice[1], 10);

    if (regularPrice !== actualPrice) {
      return this.discount(product);
    } else {
      return this.regular(product);
    }
  }

  discount(product) {
    return (
      <div className="product__item--price product__item--price--discount">
        <p>
          <span>
            <strong>{product.actual_price}</strong>
          </span>
          <span>{product.installments}</span>
        </p>

        <p>
          <span>{product.regular_price}</span>
          <span>({product.discount_percentage} off)</span>
        </p>
      </div>
    );
  }

  regular(product) {
    return (
      <div className="product__item--price">
        <p>
          <span>
            <strong>{product.regular_price}</strong>
          </span>
          <span>{product.installments}</span>
        </p>
      </div>
    );
  }

  render() {
    return this.checkPrice();
  }
}
