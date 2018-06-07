import React, { Component } from "react";
import store from "store";

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart
    };
  }

  componentDidMount() {
    const $btnqtd = document.querySelectorAll(".cart__item__info > p > span");
    const $btnDelete = document.querySelectorAll(".cart__item__delete");

    $btnqtd.forEach(item => {
      item.addEventListener("click", this.updateCart);
    });

    $btnDelete.forEach(item => {
      item.addEventListener("click", this.deleteProduct);
    });
  }

  deleteProduct = ({ target }) => {
    const { cart } = this.state;

    const itemCodeColor = target.parentNode.querySelector(
      ".cart__item__info .code_color"
    ).textContent;
    const itemSize = target.parentNode.querySelector(
      ".cart__item__info .size > span"
    ).textContent;

    const cartUpdated = cart.filter(
      item => item.code !== itemSize + itemCodeColor
    );

    store.set("cart", cartUpdated);
    this.setState({
      cart: cartUpdated
    });

    this.props.ClicktoChangeStateProduct(this.state.cart);
  };

  updateCart = e => {
    const { cart } = this.state;
    const type = e.target.dataset.type;
    const parent = e.target.parentNode.parentNode;
    const itemCodeColor = parent.querySelector(".code_color").textContent;
    const itemSize = parent.querySelector(".size > span").textContent;

    cart.map(item => {
      if (item.code_color === itemCodeColor && item.size === itemSize) {
        if (type === "less" && item.qtd > 1) {
          item.qtd--;
        }

        if (type === "more") {
          item.qtd++;
        }
      }
      return false;
    });

    store.set("cart", cart);

    this.setState({
      cart: store.get("cart")
    });

    this.props.ClicktoChangeStateProduct(this.state.cart);
  };

  renderPrice(item) {
    const qtd = parseFloat(item.qtd);
    let price = item.price.split(" ")[1].replace(",", ".");
    let fullPrice;

    price = parseFloat(price);

    fullPrice = price * qtd;

    const returnFullPrice = `R$ ${fullPrice.toFixed(2)}`;
    item.total_price = returnFullPrice.replace(".", ",");

    return item.total_price;
  }

  renderTotalPrice(item) {
    const { cart } = this.state;

    if (cart.length === 0 || cart.length === []) {
      return (
        <div className="cart__item__message">
          <h2>Nenhum produto no carrinho</h2>
        </div>
      );
    } else {
      let getTotalprice = 0;

      cart.map(item => {
        let price = item.total_price.split(" ")[1].replace(",", ".");
        price = parseFloat(price);
        return (getTotalprice += price);
      });

      let returnTotalPrice = `R$ ${getTotalprice.toFixed(2)}`;
      returnTotalPrice = returnTotalPrice.replace(".", ",");

      return (
        <div className="cart__item__total">
          <h2>
            Total: <span>{returnTotalPrice}</span>
          </h2>
        </div>
      );
    }
  }

  renderCartItem() {
    const { cart } = this.state;

    return cart.map((item, index) => {
      return (
        <section key={index} className="cart__item">
          <div className="cart__item__delete">x</div>
          <div className="cart__item__image">
            <img src={item.image} alt={item.name} title={item.name} />
          </div>
          <div className="cart__item__info">
            <h1 className="name">{item.name}</h1>
            <p className="color">Cor: {item.color}</p>
            <p className="code_color">{item.code_color}</p>
            <p className="size">
              Tamanho: <span>{item.size}</span>
            </p>
            <p>
              Quantidade:<br />
              <span data-type="less">-</span>
              {item.qtd}
              <span data-type="more">+</span>
            </p>

            <h1>Preço: {this.renderPrice(item)}</h1>
          </div>
        </section>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCartItem()}
        {this.renderTotalPrice()}
      </div>
    );
  }
}
