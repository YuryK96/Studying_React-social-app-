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
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DrawerMenu } from "./components/Drawer/DrawerMenu";

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
    <Container disableGutters={true} maxWidth={false}>
      <Header />

      <Grid2 container>
        <Grid2 xs={2}></Grid2>
        <Grid2 xs={9}>
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
        </Grid2>
      </Grid2>
    </Container>
  );
};
type PropsType = {};
