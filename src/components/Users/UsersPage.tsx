import { useSelector } from "react-redux";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { getIsFetching } from "../../redux/users-selectors";
import { Users } from "./Users";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { Box } from "@mui/material";

type UsersPageType = {};

const UsersPage: React.FC<UsersPageType> = () => {
  const isFetching = useSelector(getIsFetching);
  return (
    <Box>
      {isFetching ? <Preloader /> : null}

      <Users />
    </Box>
  );
};

export default compose(WithAuthRedirect)(UsersPage);
