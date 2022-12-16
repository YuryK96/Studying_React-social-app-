import { connect } from "react-redux";
import { compose } from "redux";

import { login } from "../../redux/auth-reducer.ts";
import { getCaptcha } from "../../redux/auth-selectors";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: getCaptcha(state),
  };
};

export default compose(connect(mapStateToProps, { login }))(Login);
