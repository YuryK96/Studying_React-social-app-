import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth-selectors";
import { AppStateType } from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
});

export const WithAuthRedirect = (Component: any) => {
  let RedirectComponent = (props: any) => {
    if (!props.isAuth) return <Navigate to={"/Login"} />;
    return <Component {...props} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
