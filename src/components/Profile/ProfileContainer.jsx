import React from "react";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 2;
    }

    usersAPI.getProfile(userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
export default connect(mapStateToProps, {
  setUserProfile,
})(withRouter(ProfileContainer));
