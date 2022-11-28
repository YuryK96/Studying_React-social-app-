import React from "react";
import { connect } from "react-redux";
import { logOut, setAuthUser } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUser();
  }
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
export default connect(mapStateToProps, { setAuthUser, logOut })(
  HeaderContainer
);
