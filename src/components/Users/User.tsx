import { NavLink } from "react-router-dom";
import s from "./Users.module.scss";
import { UserType } from "../../types/types";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const User: React.FC<UserPropsType> = ({
  followingInProgress,
  toggleUserFollow,
  toggleUserUnFollow,
  user,
}) => {
  return (
    <Box maxWidth={150}>
      <Box
        minWidth={150}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <NavLink to={"/Profile/" + user.id}>
          <Typography textAlign={"center"} fontWeight={500}>
            {user.name}
          </Typography>
          <Avatar
            sx={{ width: 100, height: 100, margin: "auto" }}
            variant="square"
            src={
              user.photos.small != null
                ? user.photos.small
                : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            }
            alt=""
          />
          <Typography textAlign={"center"} marginTop={0.5} color={"gray"}>
            {user.status}
          </Typography>
        </NavLink>
        {user.followed ? (
          <LoadingButton
            variant="outlined"
            size="small"
            sx={{ marginTop: 1 }}
            loading={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              toggleUserFollow(user.id);
            }}
          >
            UnFollow
          </LoadingButton>
        ) : (
          <LoadingButton
            sx={{ marginTop: 1 }}
            variant="outlined"
            size="small"
            loading={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              toggleUserUnFollow(user.id);
            }}
          >
            Follow
          </LoadingButton>
        )}
      </Box>
    </Box>
  );
};

export default User;

type UserPropsType = {
  user: UserType;
  followingInProgress: Array<number>;
  toggleUserFollow: (id: number) => void;
  toggleUserUnFollow: (id: number) => void;
};
