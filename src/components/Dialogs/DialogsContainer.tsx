import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialog-reducer";
import { getDialogsData, getMessagesData } from "../../redux/dialog-selectors";
import { AppStateType } from "../../redux/redux-store";
import { DialogType, MessageType } from "../../types/types";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    messagesData: getMessagesData(state),
    dialogsData: getDialogsData(state),
  };
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { addNewMessage: actions.addNewMessage }
  ),
  WithAuthRedirect
)(Dialogs);

type MapStatePropsType = {
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
};

type MapDispatchPropsType = {
  addNewMessage: (newMessage: string) => void;
};

type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType;
