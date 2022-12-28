import { connect } from "react-redux";
import {
  FilterFormType,
  requestUsers,
  toggleUserFollow,
  toggleUserUnFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getUserSuper,
  getFilter,
} from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    let { currentPage, pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (page: number) => {
    let { pageSize, filter } = this.props;
    this.props.requestUsers(page, pageSize, filter);
  };
  onFilterChanged = (filter: FilterFormType) => {
    let { pageSize } = this.props;
    this.props.requestUsers(1, pageSize, filter);
  };
  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          isFetching={this.props.isFetching}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onFilterChanged={this.onFilterChanged}
          followingInProgress={this.props.followingInProgress}
          toggleUserFollow={this.props.toggleUserFollow}
          toggleUserUnFollow={this.props.toggleUserUnFollow}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUserSuper(state),
    filter: getFilter(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      requestUsers,
      toggleUserFollow,
      toggleUserUnFollow,
    }
  ),
  WithAuthRedirect
)(UsersContainer);

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  users: Array<UserType>;
  totalUsersCount: number;
  followingInProgress: Array<number>;
  filter: FilterFormType;
};

type MapDispatchPropsType = {
  requestUsers: (
    currentPage: number,
    pageSize: number,
    filter: FilterFormType
  ) => void;
  toggleUserFollow: (id: number) => void;
  toggleUserUnFollow: (id: number) => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;
