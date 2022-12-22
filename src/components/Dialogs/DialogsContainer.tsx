import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { addNewMessage } from "../../redux/dialog-reducer";
import { getDialogsData, getMessagesData } from "../../redux/dialog-selectors";
import { AppStateType } from "../../redux/redux-store";
import { DialogType, MessageType } from "../../types/types";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
};

type MapDispatchPropsType = {
  addNewMessage: (newMessage: string) => void;
};

type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType;
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    messagesData: getMessagesData(state),
    dialogsData: getDialogsData(state),
  };
};

export default compose<React.Component<PropsType>>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { addNewMessage }
  ),
  WithAuthRedirect
)(Dialogs);
