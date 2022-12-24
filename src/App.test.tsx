import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});
