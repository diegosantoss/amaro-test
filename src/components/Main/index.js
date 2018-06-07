import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Home from "../Home";
import ProductUnique from "../Product/ProductUnique";
import Cart from "../Cart";
import Search from "../Search";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>
            Roupas Femininas, Vestidos, Sapatos, Blusas, Calças, Saias, Moda |
            AMARO
          </title>
        </Helmet>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Home
                ClicktoChangeStateProduct={this.props.ClicktoChangeStateProduct}
                products={this.props.products}
              />
            )}
            exact
          />
          <Route
            path="/shop/:product/:color"
            render={props => (
              <ProductUnique
                ClicktoChangeStateProduct={this.props.ClicktoChangeStateProduct}
                products={this.props.products}
                propsRoute={props}
              />
            )}
          />
          <Route
            path="/cart"
            render={props => (
              <Cart
                ClicktoChangeStateProduct={this.props.ClicktoChangeStateProduct}
                products={this.props.products}
                propsRoute={props}
                cart={this.props.cart}
              />
            )}
          />
          <Route
            path="/search/:search"
            render={props => (
              <Search products={this.props.products} propsRoute={props} />
            )}
          />
        </Switch>
      </main>
    );
  }
}
