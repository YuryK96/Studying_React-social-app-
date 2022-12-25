import { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth-selectors";
import { AppStateType } from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
});

export function WithAuthRedirect<WCP extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<WCP>
) {
  const RedirectComponent: React.FC<MapPropsType & MapDispatchPropsType> = (
    props
  ) => {
    let { isAuth, fake, ...restProps } = props;
    if (!isAuth) return <Navigate to={"/Login"} />;

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<
    MapPropsType,
    MapDispatchPropsType,
    WCP,
    AppStateType
  >(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

type MapPropsType = {
  isAuth: boolean;
};
type MapDispatchPropsType = {
  fake: () => void;
};
