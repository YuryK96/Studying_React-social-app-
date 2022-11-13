import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (action) => dispatch(followAC(action)),
    onUnFollow: (action) => dispatch(unfollowAC(action)),
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
