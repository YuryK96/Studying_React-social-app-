import DialogsCss from "../Dialogs.module.scss";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../types/types";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const DialogItem: React.FC<Propstype> = ({ dialogsData }) => {
  let arrDialog = dialogsData.map((dialog) => {
    return (
      <Box key={dialog.id} sx={{paddingTop:1}} >
        <NavLink to={"/Messages/&userId=" + dialog.id} className={DialogsCss.dialog_link}>
          <Avatar> {dialog.name.charAt(0)}</Avatar>
          <Typography sx={{width:"max-content"}}>{dialog.name}</Typography>
        </NavLink>
      </Box>
    );
  });

  return <Box sx={{width:'max-content'}} className={DialogsCss.dialogWrapper}>{arrDialog}</Box>;
};

export default DialogItem;

type Propstype = {
  dialogsData: Array<DialogType>;
};
