import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth-reducer.ts";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logOut={this.props.logOut}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logOut })(HeaderContainer);
