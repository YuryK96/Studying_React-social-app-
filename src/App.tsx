import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Navbar";

import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersPage from "./components/Users/UsersPage";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { AppStateType } from "./redux/redux-store";
import { getInitialized } from "./redux/app-selectors";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/Profile")
);

class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/Profile" />} />
            <Route path="/Profile/:userId" element={<ProfileContainer />} />
            <Route path="/Profile/" element={<ProfileContainer />} />

            <Route path="/Messages/*" element={<DialogsContainer />} />

            <Route path="/Users" element={<UsersPage />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Login" element={<Login />} />
          </Routes>{" "}
        </Suspense>
      </div>
    );
  }
}

const mapStatetoProps = (state: AppStateType) => ({
  initialized: getInitialized(state),
});

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStatetoProps, { initializeApp })(App);

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
  initialized: boolean;
};
type OwnPropsType = {};
type MapDispatchPropsType = {
  initializeApp: () => void;
};
