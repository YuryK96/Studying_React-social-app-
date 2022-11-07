import { createRef } from "react";
import DialogsCss from "./../Dialogs.module.css";
import { useState } from "react";

const Messages = ({ messagesData, addMessage }) => {
  const [textarea, setTextarea] = useState("");
  let arrMessages = messagesData.map((message) => {
    return (
      <div className={DialogsCss.message}>
        <p>{message.message}</p>
      </div>
    );
  });

  return (
    <div className={DialogsCss.message}>
      {arrMessages}

      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button
        onClick={() => {
          addMessage(textarea);
          setTextarea("");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Messages;
