import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./index.css";
import UserProvider from "./components/userProvider";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.querySelector("#root")
);
