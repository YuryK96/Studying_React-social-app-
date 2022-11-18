import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });

    // 72e23854-f5e3-4835-a7c4-abe54c7e9e9c
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.onCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <div>
        <Preloader isFetching={this.props.isFetching} />
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onFollow={this.props.onFollow}
          onUnFollow={this.props.onUnFollow}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (action) => dispatch(followAC(action)),
    onUnFollow: (action) => dispatch(unfollowAC(action)),
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    onCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setTotalUserCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
