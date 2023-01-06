import DialogsCss from "./Dialogs.module.css";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { useDispatch, useSelector } from "react-redux";
import { getDialogsData } from "../../redux/dialog-selectors";
import { AppDispatch } from "../../redux/redux-store";
import { actions } from "../../redux/dialog-reducer";

import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";

const Dialogs: React.FC<PropsType> = () => {
  const dispatch: AppDispatch = useDispatch();
  const dialogsData = useSelector(getDialogsData);

  const handleAddNewMessage = (newMessage: string) => {
    dispatch(actions.addNewMessage(newMessage));
  };

  return (
    <div className={DialogsCss.dialogs}>
      <DialogItem dialogsData={dialogsData} />
      <Messages
        addNewMessage={handleAddNewMessage}
        messagesData={dialogsData}
      />
    </div>
  );
};
export default compose(WithAuthRedirect)(Dialogs);

type PropsType = any;
