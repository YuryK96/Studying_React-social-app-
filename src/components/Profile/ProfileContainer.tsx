import React from "react";
import {
  setUser,
  getStatus,
  updateStatus,
  savePhoto,
  updateProfile,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

import {
  getProfileStatus,
  getUserProfile,
} from "../../redux/profile-selectors";
import { AppStateType } from "../../redux/redux-store";
import { PhotoType, UserProfileType } from "../../types/types";
import { getUserId } from "../../redux/auth-selectors";

type MapStatePropsType = {
  profile: UserProfileType | null;
  status: string;
  userId: number | null;
};

type MapDispatchPropsType = {
  setUser: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (photo: string | Blob) => void;
  updateProfile: (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ) => void;
};

type OwnPropsType = {
  isAuth: boolean;
  router: {
    location: {
      hash: string;
      key: string;
      pathname: string;
      search: string;
      state: null;
    };
    navigate: () => void;
    params: any;
  };
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = this.props.userId;
    }
    this.props.setUser(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: Object) {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.router.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          updateProfile={this.props.updateProfile}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: getUserProfile(state),
    status: getProfileStatus(state),
    userId: getUserId(state),
  };
};

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: PropsType) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      setUser,
      getStatus,
      updateStatus,
      savePhoto,
      updateProfile,
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
