import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/redux-store";
import {
  FilterFormType,
  requestUsers,
  toggleUserFollow,
  toggleUserUnFollow,
} from "../../redux/users-reducer";
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUserSuper,
} from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Pagination";
import User from "./User";
import s from "./Users.module.scss";
import UsersSearchForm from "./UsersSearchForm";

export const Users: React.FC<UsersType> = ({}) => {
  const dispatch: AppDispatch = useDispatch();
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const users = useSelector(getUserSuper);
  const pageSize = useSelector(getPageSize);
  const followingInProgress = useSelector(getFollowingInProgress);
  const isFetching = useSelector(getIsFetching);
  const filter = useSelector(getFilter);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(
      `/Users/&term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    );
  }, [filter, currentPage]);

  useEffect(() => {
    const url = new URLSearchParams(location.pathname);

    const urlFriend = url.get("friend");
    const urlPage = Number(url.get("page"));
    const urlTerm = url.get("term");

    let actualPage = currentPage;
    let actualFilter = filter;
    if (urlPage) actualPage = urlPage;

    switch (urlFriend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };

        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
      default:
        break;
    }
    if (urlTerm) actualFilter = { ...actualFilter, term: urlTerm };

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, [location.pathname]);

  const onPageChanged = (page: number) => {
    dispatch(requestUsers(page, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterFormType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  const follow = (id: number) => {
    dispatch(toggleUserFollow(id));
  };
  const unfollow = (id: number) => {
    dispatch(toggleUserUnFollow(id));
  };

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
            toggleUserFollow={follow}
            toggleUserUnFollow={unfollow}
            user={user}
          />
        );
      })}
    </div>
  );
};

type UsersType = {};
