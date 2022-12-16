import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addNewMessage } from "../../redux/dialog-reducer.ts";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
  };
};

export default compose(
  connect(mapStateToProps, { addNewMessage }),
  withAuthRedirect
)(Dialogs);
