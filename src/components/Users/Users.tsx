import { FilterFormType } from "../../redux/users-reducer";
import { UserType } from "../../types/types";
import Paginator from "../common/Paginator/Pagination";
import User from "./User";
import s from "./Users.module.scss";
import UsersSearchForm from "./UsersSearchForm";

const Users: React.FC<UsersType> = ({
  isFetching,
  onPageChanged,
  currentPage,
  users,
  totalUsersCount,
  pageSize,
  followingInProgress,
  toggleUserFollow,
  toggleUserUnFollow,
  onFilterChanged,
}) => {
  return (
    <div>
      <UsersSearchForm
        onFilterChanged={onFilterChanged}
        isFetching={isFetching}
      />

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
  onFilterChanged: (filter: FilterFormType) => void;
  isFetching: boolean;
};
