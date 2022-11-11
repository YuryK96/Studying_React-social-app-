import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({
  onUpdateNewMessage,
  onAddNewMessage,
  messagesData,
  dialogsData,
  newMessage,
}) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData} />
      <Messages
        onUpdateNewMessage={onUpdateNewMessage}
        onAddNewMessage={onAddNewMessage}
        messagesData={messagesData}
        newMessage={newMessage}
      />
    </div>
  );
};

export default Dialogs;
