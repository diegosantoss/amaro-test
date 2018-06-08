import React, { Component } from "react";

import Product from "../Product";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products
    };
  }

  renderProductSearch = () => {
    const { products } = this.state;
    const search = this.props.propsRoute.match.params.search.toLowerCase();
    let allProducts = [];
    const $input = document.querySelector("input");

    const result = search => {
      return products.filter(
        product => product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    };

    allProducts = result(search);

    if (allProducts.length === 0 || allProducts === []) {
      return (
        <div className="search__message">
          <h2>
            Sua busca por <span>{search}</span> não foi encontrada.
          </h2>
        </div>
      );
    } else {
      return <Product products={allProducts} />;
    }
  };

  render() {
    return this.renderProductSearch();
  }
}
