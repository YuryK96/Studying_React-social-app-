import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
