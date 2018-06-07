import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: ""
    };
  }

  componentDidMount() {
    const $input = document.querySelector("input");
    const $search = document.querySelector(".search");

    $input.addEventListener("input", this.createSearch);
    $input.addEventListener("keyup", this.pressEnter);
    $search.addEventListener("click", this.checkLink);
  }

  createSearch = ({ target }) => {
    this.setState({
      link: target.value
    });
    return;
  };

  pressEnter = e => {
    const $search = document.querySelector(".search");
    if (e.keyCode === 13) {
      $search.click();
    }
  };

  checkLink = e => {
    const { link } = this.state;
    const $input = document.querySelector("input");

    if (link === "" || link === null) {
      e.preventDefault();
    }

    $input.value = "";
  };

  render() {
    const { link } = this.state;
    return (
      <div className="header__search">
        <div>
          <input type="text" />
          <Link to={`/search/${link}`} className="search">
            Search
          </Link>
        </div>
      </div>
    );
  }
}
