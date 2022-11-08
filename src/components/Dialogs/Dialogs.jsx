import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogsData, dispatch}) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData.dialogsData} />
      <Messages
        messagesData={dialogsData.messagesData}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Dialogs;
