import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import "antd/dist/antd.css";
import "assets/styles/styles.scss";

import "assets/i18n/i18n";

import App from "./App";
import { stores } from "core/stores/stores";
import * as serviceWorker from "./serviceWorker";

// For easier debugging
(window as any)._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Report this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
