import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUserAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
