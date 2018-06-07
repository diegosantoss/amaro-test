import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

export default class ProductItem extends Component {
  showProducts() {
    const { product } = this.props;
    const url = product.name
      .toLowerCase()
      .split(" ")
      .join("-");

    const title = product.name;
    const image = product.image;
    const price = product.regular_price;

    if (
      title === "" ||
      title === null ||
      image === "" ||
      image === null ||
      price === "" ||
      price === null
    ) {
      return false;
    }

    const color = product.color_slug;

    return (
      <section className="product__item">
        <Link
          className="product__item--link"
          to={`/shop/${url}/${color}`}
          title={`ver produto ${product.name}`}
        >
          <ProductImage product={product} />
          <ProductInfo product={product} />
          <ProductPrice product={product} />
        </Link>
      </section>
    );
  }

  render() {
    return this.showProducts();
  }
}
