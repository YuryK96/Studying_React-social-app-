import DialogsCss from "./Dialogs.module.scss";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { useDispatch, useSelector } from "react-redux";
import { getDialogsData } from "../../redux/dialog-selectors";
import { AppDispatch } from "../../redux/redux-store";
import { actions } from "../../redux/dialog-reducer";

import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";
import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";

const Dialogs: React.FC<PropsType> = () => {
  const dispatch: AppDispatch = useDispatch();
  const dialogsData = useSelector(getDialogsData);

  const handleAddNewMessage = (newMessage: string, id: number) => {
    dispatch(actions.addNewMessage(newMessage, id));
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>

      <DialogItem dialogsData={dialogsData} />
        </Grid>
        <Grid item xs={8}>
      <Messages
        addNewMessage={handleAddNewMessage}
        messagesData={dialogsData}
      />
        </Grid>
      </Grid>
    </Box>
  );
};
export default compose(WithAuthRedirect)(Dialogs);

type PropsType = any;
