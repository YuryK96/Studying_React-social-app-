import { createRef } from "react";
import DialogsCss from "./../Dialogs.module.css";
import { addNewMessage } from "../../../redux/state";
import { updateNewMessageTextActionCreator } from "../../../redux/state";

const Messages = ({ messagesData, dispatch, newMessage }) => {
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
        value={newMessage}
        onChange={(e) => {
         dispatch(updateNewMessageTextActionCreator(e));
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button
        onClick={() => {
          dispatch(addNewMessage());
         
        }}
      >
        click
      </button>
    </div>
  );
};

export default Messages;
