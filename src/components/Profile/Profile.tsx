import ProfileCss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { PhotoType, UserProfileType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileStatus,
  getUserProfile,
} from "../../redux/profile-selectors";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserId } from "../../redux/auth-selectors";
import { AppDispatch } from "../../redux/redux-store";
import {
  setUser,
  getStatus,
  savePhoto,
  updateStatus,
  updateProfile,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { ComponentType, useEffect } from "react";
import { Box } from "@mui/material";

const Profile: React.FC<ProfileType> = ({ router }) => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(getUserProfile);
  const status = useSelector(getProfileStatus);
  const userId = useSelector(getUserId);

  const onSetUser = (paramsUserId: number) => {
    dispatch(setUser(paramsUserId));
  };
  const onGetStatus = (paramsUserId: number) => {
    dispatch(getStatus(paramsUserId));
  };
  const onUpdateStatus = (status: string) => {
    dispatch(updateStatus(status));
  };

  const onSavePhoto = (photo: File) => {
    dispatch(savePhoto(photo));
  };

  const onUpdateProfile = (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ) => {
    dispatch(updateProfile(data, userId, setError));
  };

  const onRefreshProfile = () => {
    let paramsUserId = router.params.userId;

    if (!paramsUserId) {
      paramsUserId = userId;
    }
    onSetUser(paramsUserId);
    onGetStatus(paramsUserId);
  };

  useEffect(() => {
    onRefreshProfile();
  }, [router.params.userId]);

  return (
    <Box>
      <ProfileInfo
        isOwner={!router.params.userId}
        profile={profile}
        status={status}
        updateStatus={onUpdateStatus}
        savePhoto={onSavePhoto}
        updateProfile={onUpdateProfile}
        userId={userId}
      />
      <MyPostsContainer />
    </Box>
  );
};

function withRouter<WCP extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<WCP>
) {
  const ComponentWithRouterProp: React.FC<{}> = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <WrappedComponent
        {...(props as unknown as WCP)}
        router={{ location, navigate, params }}
      />
    );
  };
  return ComponentWithRouterProp;
}

export default compose<React.ComponentType>(
  withRouter,
  WithAuthRedirect
)(Profile);

type ProfileType = {
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
