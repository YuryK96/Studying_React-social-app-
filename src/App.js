import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Navbar";

import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
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

            <Route path="/Users" element={<UsersContainer />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Login" element={<LoginContainer />} />
          </Routes>{" "}
        </Suspense>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStatetoProps, { initializeApp })(App);
