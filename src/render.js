import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { changeNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (appState) => {
  root.render(
    <React.StrictMode>
      <App
        appState={appState}
        addMessage={addMessage}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </React.StrictMode>
  );
};
