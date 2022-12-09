import Paginator from "../common/Paginator/Pagination";
import User from "./User";
import s from "./Users.module.scss";

const Users = ({
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
