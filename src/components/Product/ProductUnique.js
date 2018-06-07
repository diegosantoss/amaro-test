import React, { Component } from "react";
import store from "store";
import Helmet from "react-helmet";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductSize from "./ProductSize";
import ProductButton from "./ProductButton";

export default class ProductUnique extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.propsRoute.match.params.product
        .toUpperCase()
        .split("-")
        .join(" "),

      itemSize: "",
      color: this.props.propsRoute.match.params.color,
      Allproducts: this.props.products,
      cart: store.get("cart") || [],

      product: () => {
        return this.state.Allproducts.filter(
          product =>
            product.name === this.state.title &&
            product.color_slug === this.state.color
        )[0];
      }
    };
  }

  componentDidMount() {
    const $btnSize = document.querySelector(".product__item__size");
    const $btnCart = document.querySelector(".product__item__shop button");

    $btnSize.addEventListener("click", this.addSize);
    $btnCart.addEventListener("click", this.addCart);
  }

  showProduct() {
    const { product } = this.state;
    const ProductUnique = product();
    return (
      <section className="product__item__info">
        <Helmet>
          <title>
            {ProductUnique.name} | Roupas Femininas, Vestidos, Sapatos, Blusas,
            Calças, Saias, Moda | AMARO
          </title>
        </Helmet>
        <ProductImage product={ProductUnique} />
        <ProductInfo product={ProductUnique} />
        <ProductPrice product={ProductUnique} />
        <ProductSize product={ProductUnique} />
        <div className="product__item__info--errorSize">Select size</div>
        <div className="product__item__info--successCart">
          This product was add into your cart
        </div>
        <ProductButton />
      </section>
    );
  }

  addSize = ({ target }) => {
    const size = target;
    const isActiceSize = document.querySelector(".active");

    if (isActiceSize) {
      isActiceSize.classList.remove("active");
    }
    size.classList.add("active");

    this.setState({
      itemSize: size.textContent
    });
  };

  addCart = ({ target }) => {
    const { product, itemSize, cart } = this.state;

    const $productName = product().name;
    const $productPrice = product().actual_price;
    const $productImage = product().image;
    const $productColor = product().color;
    const $productCodeColor = product().code_color;
    const $sizeError = document.querySelector(
      ".product__item__info--errorSize"
    );

    const $successCart = document.querySelector(
      ".product__item__info--successCart"
    );

    let checkProduct = false;
    let addProductCart = {};

    if (!itemSize) {
      $sizeError.classList.add("product__item__info--ok");
      this.hideMessage($sizeError);
      return false;
    } else {
      $sizeError.classList.remove("product__item__info--ok");
      $successCart.classList.add("product__item__info--ok");
      this.hideMessage($successCart);
    }

    cart.map(item => {
      if (item.code_color === product().code_color && item.size === itemSize) {
        item.qtd++;
        checkProduct = true;
        return false;
      }
      return false;
    });

    if (checkProduct) {
      store.set("cart", cart);
      this.props.ClicktoChangeStateProduct(this.state.cart);
      return false;
    }

    addProductCart = {
      name: $productName,
      size: itemSize,
      price: $productPrice,
      qtd: 1,
      color: $productColor,
      code_color: $productCodeColor,
      code: itemSize + $productCodeColor,
      image: $productImage
    };

    cart.push(addProductCart);
    store.set("cart", cart);
    this.props.ClicktoChangeStateProduct(this.state.cart);

    this.setState({
      cart: store.get("cart")
    });
  };

  hideMessage(e) {
    setTimeout(() => {
      e.classList.remove("product__item__info--ok");
    }, 3000);
  }
  render() {
    return this.showProduct();
  }
}
