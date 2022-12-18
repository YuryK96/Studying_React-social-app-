import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth-reducer";
import { getIsAuth, getLogin } from "../../redux/auth-selectors";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

type MapDispatchPropsType = {
  logOut: () => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<PropsType> {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});
export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { logOut })(HeaderContainer);
