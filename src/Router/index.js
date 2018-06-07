import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Root from "../components/Root";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/amaro-test">
        <Root />
      </BrowserRouter>
    );
  }
}
