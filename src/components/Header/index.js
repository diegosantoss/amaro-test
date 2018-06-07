import React, { Component } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";
import Cart from "./Cart";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://d2odcms9up7saa.cloudfront.net/appdata/uploads/cms/logo-small_20170706004207.png"
              alt="AMARO"
            />
          </Link>
        </div>
        <nav className="header__nav">
          <Search />
          <Cart cart={this.props.cart} />
        </nav>
      </header>
    );
  }
}
