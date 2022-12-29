import { useSelector } from "react-redux";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { getIsFetching } from "../../redux/users-selectors";
import { Users } from "./Users";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

type UsersPageType = {};

const UsersPage: React.FC<UsersPageType> = () => {
  const isFetching = useSelector(getIsFetching);
  return (
    <div>
      {isFetching ? <Preloader /> : null}

      <Users />
    </div>
  );
};

export default compose(WithAuthRedirect)(UsersPage);
