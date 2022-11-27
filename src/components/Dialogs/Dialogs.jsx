import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({ addNewMessage, messagesData, dialogsData }) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData} />
      <Messages addNewMessage={addNewMessage} messagesData={messagesData} />
    </div>
  );
};

export default Dialogs;
