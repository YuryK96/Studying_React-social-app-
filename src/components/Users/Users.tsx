import { UserType } from "../../types/types";
import Paginator from "../common/Paginator/Pagination";
import User from "./User";
import s from "./Users.module.scss";

const Users: React.FC<UsersType> = ({
  onPageChanged,
  currentPage,
  users,
  totalUsersCount,
  pageSize,
  followingInProgress,
  toggleUserFollow,
  toggleUserUnFollow,
}) => {
  return (
    <div>
      <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />

      {users.map((user) => {
        return (
          <User
            key={user.id}
            followingInProgress={followingInProgress}
            toggleUserFollow={toggleUserFollow}
            toggleUserUnFollow={toggleUserUnFollow}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default Users;

type UsersType = {
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  toggleUserFollow: (id: number) => void;
  toggleUserUnFollow: (id: number) => void;
};
