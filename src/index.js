
import reportWebVitals from './reportWebVitals';
import appState from './redux/state'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { changeNewPostText } from "./redux/state";
import {subscribe} from "./redux/state"

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = () => {
 
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


renderEntireTree(appState)
subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
