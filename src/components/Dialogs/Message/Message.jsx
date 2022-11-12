import DialogsCss from "./../Dialogs.module.css";

const Messages = ({
  messagesData,
  onUpdateNewMessage,
  newMessage,
  onAddNewMessage,
}) => {
  let arrMessages = messagesData.map((message, i) => {
    return (
      <div key={i} className={DialogsCss.message}>
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
          onUpdateNewMessage(e);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={onAddNewMessage}>click</button>
    </div>
  );
};

export default Messages;
