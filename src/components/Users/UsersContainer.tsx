import { connect } from "react-redux";
import {
  requestUsers,
  toggleUserFollow,
  toggleUserUnFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getUserSuper,
} from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  users: Array<UserType>;
  totalUsersCount: number;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void;
  toggleUserFollow: (id: number) => void;
  toggleUserUnFollow: (id: number) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (page: number) => {
    let { pageSize } = this.props;
    this.props.requestUsers(page, pageSize);
  };
  render() {
    return (
      <div>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
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
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.Component<PropsType>>(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      requestUsers,
      toggleUserFollow,
      toggleUserUnFollow,
    }
  ),
  withAuthRedirect
)(UsersContainer);
