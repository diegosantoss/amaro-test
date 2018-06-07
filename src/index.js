import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";

import "./css/main.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
