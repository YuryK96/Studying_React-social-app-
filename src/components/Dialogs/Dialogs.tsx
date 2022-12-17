import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { DialogType, MessageType } from "../../types/types";

type PropsType = {
  addNewMessage: (newMessage: string) => void;
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
};

const Dialogs: React.FC<PropsType> = ({
  addNewMessage,
  messagesData,
  dialogsData,
}) => {
  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData} />
      <Messages addNewMessage={addNewMessage} messagesData={messagesData} />
    </div>
  );
};

export default Dialogs;
