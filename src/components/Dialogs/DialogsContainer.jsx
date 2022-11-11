import { connect } from "react-redux";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessage: state.dialogsPage.newMessage,
    dialogsData: state.dialogsPage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateNewMessage: (action) => {
      dispatch(updateNewMessageTextActionCreator(action));
    },
    onAddNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
