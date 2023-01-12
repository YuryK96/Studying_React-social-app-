import ProfileInfoCss from "./ProfileInfo.module.css";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";

const ProfileStatuswithHooks: React.FC<ProfileStatuswithHooksType> = ({
  status,
  updateStatus,
}) => {
  let [editMode, setEditMode] = useState(false);
  let [statusState, setStatusState] = useState(status);

  useEffect(() => {
    setStatusState(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusState);
  };
  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatusState(event.currentTarget.value);
  };
  return (
    <Box display={"flex"} justifyContent={"center"}>
      {!editMode && (
        <Box>
          <Typography
            borderBottom={"1px solid gray"}
            minWidth={100}
            role="span"
            onDoubleClick={activateEditMode}
          >
            {status || "------"}
          </Typography>
        </Box>
      )}

      {editMode && (
        <Box>
          {" "}
          <TextField
            autoFocus
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={statusState}
            size={"small"}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProfileStatuswithHooks;

type ProfileStatuswithHooksType = {
  status: string;
  updateStatus: (status: string) => void;
};
