import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({
  updateNewMessage,
  addNewMessage,
  messagesData,
  dialogsData,
  newMessage,
}) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData} />
      <Messages
        updateNewMessage={updateNewMessage}
        addNewMessage={addNewMessage}
        messagesData={messagesData}
        newMessage={newMessage}
      />
    </div>
  );
};

export default Dialogs;
