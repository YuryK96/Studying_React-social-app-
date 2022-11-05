import { createRef } from "react";
import DialogsCss from "./../Dialogs.module.css";

const Messages = ({messagesData, addMessage}) => {
  let arrMessages = messagesData.map((message) => {
    return (
      <div className={DialogsCss.message}>
        <p>{message.message}</p>
      </div>
    );
  });
  let messageText = createRef();

  return (
    <div className={DialogsCss.message}>
      {arrMessages}

      <textarea ref={messageText} name="" id="" cols="30" rows="10"></textarea>
      <button onClick={() => addMessage(messageText)}>click</button>
    </div>
  );
};

export default Messages;