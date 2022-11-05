import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogsData, addMessage}) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData.dialogsData} />
      <Messages
        messagesData={dialogsData.messagesData}
        addMessage={addMessage}
      />
    </div>
  );
};

export default Dialogs;
