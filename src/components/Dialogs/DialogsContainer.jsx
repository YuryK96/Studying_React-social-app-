import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  let state = store.getState();
  let onUpdateNewMessage = (e) => {
    store.dispatch(updateNewMessageTextActionCreator(e));
  };

  let onAddNewMessage = () => {
    store.dispatch(addNewMessageActionCreator());
  };
  return (
    <Dialogs
      updateNewMessage={onUpdateNewMessage}
      addNewMessage={onAddNewMessage}
      messagesData={state.dialogsPage.messagesData}
      newMessage={state.dialogsPage.newMessage}
      dialogsData={state.dialogsPage.dialogsData}
    />
  );
};

export default DialogsContainer;
