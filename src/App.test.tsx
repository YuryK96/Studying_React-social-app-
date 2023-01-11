import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import { App } from "./App";

test("renders without crashing", () => {
  const div: any = document.createElement("div");

  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
