import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      {" "}
      <App />
    </Provider>,
    div
  );
});
