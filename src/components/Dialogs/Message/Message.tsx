import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { DialogType, MessageType } from "../../../types/types";
import DialogsCss from "../Dialogs.module.scss";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Messages: React.FC<PropsTypeMessages> = ({
  messagesData,
  addNewMessage,
}) => {
  const location = useLocation();
  const [userIndex, getUserIndex] = useState(0);
  const [urlId, getUrlId] = useState(0);

  useEffect(() => {
    const url = new URLSearchParams(location.pathname);
    const urlId = Number(url.get("userId"));
    getUrlId(urlId);
    getUserIndex(messagesData.findIndex((x) => x.id === urlId));
  }, [location.pathname]);

  let arrMessages = messagesData[userIndex].messagesData.map((item, i) => {
    return (
      <Box key={i} sx={{ paddingTop: 1 }} >
        <Typography>{item.message}</Typography>
      </Box>
    );
  });

  return (
    <Box sx={{height: "80vh", padding:1, paddingLeft: 2}}>
    <Box sx={{display: "flex", flexDirection:"column", minHeight: "60%"}} >
       {arrMessages}</Box>
      <NewMessage addNewMessage={addNewMessage} urlId={urlId} />
    </Box>

  );
};

export default Messages;

const NewMessage: React.FC<PropsTypeNewMessage> = ({
  addNewMessage,
  urlId,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addNewMessage(data.newMessage, urlId);
    reset();
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className={DialogsCss.form_Message}>
        <TextField  label="New Message"
                    multiline
                    minRows={3} {...register("newMessage")} ></TextField>
        <Box sx={{marginTop: 1}}>
          <Button sx={{width:"100%"}} type="submit" variant="outlined" endIcon={<SendIcon />}  >Send</Button>
        </Box>
      </form>
    </Box>
  );
};

type PropsTypeNewMessage = {
  addNewMessage: (newMessage: string, userIndex: number) => void;
  urlId: number;
};

type FormValues = {
  newMessage: string;
};

type PropsTypeMessages = {
  addNewMessage: (newMessage: string, urlId: number) => void;
  messagesData: Array<DialogType>;
};
