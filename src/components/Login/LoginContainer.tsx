import { connect } from "react-redux";
import { compose } from "redux";

import { login } from "../../redux/auth-reducer";
import { getCaptcha, getIsAuth } from "../../redux/auth-selectors";
import { AppStateType } from "../../redux/redux-store";
import Login from "./Login";

type MapStatePropsType = {
  isAuth: boolean;
  captcha: string | null;
};

type MapDispatchPropsType = {
  login: (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null,
    setError: any
  ) => void;
};

type OwnPropsType = {};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state),
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { login }
  )
)(Login);
