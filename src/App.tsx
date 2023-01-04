import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import "./App.css";

import UsersPage from "./components/Users/UsersPage";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { AppDispatch, AppStateType } from "./redux/redux-store";
import { getInitialized } from "./redux/app-selectors";
import Header from "./components/Header/Header";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/Profile")
);

export const App: React.FC<PropsType> = ({}) => {
  const initialize = useSelector(getInitialized);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialize) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <div>
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink to="/Messages">Messages</NavLink>
        <NavLink to="/Users">Users</NavLink>
      </div>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/Profile" />} />
          <Route path="/Profile/:userId" element={<ProfileContainer />} />
          <Route path="/Profile/" element={<ProfileContainer />} />
          <Route path="/Messages/*" element={<DialogsContainer />} />
          <Route path="/Users/*" element={<UsersPage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>{" "}
      </Suspense>
    </div>
  );
};
type PropsType = {};
