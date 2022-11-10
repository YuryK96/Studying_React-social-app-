import DialogsCss from "./../Dialogs.module.css";

const Messages = ({
  messagesData,
  updateNewMessage,
  newMessage,
  addNewMessage,
}) => {
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
          updateNewMessage(e);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={addNewMessage}>click</button>
    </div>
  );
};

export default Messages;
