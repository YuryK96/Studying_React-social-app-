import React, { Suspense, useEffect, useState } from "react";
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
import { Box, CSSObject, styled, Theme } from "@mui/material";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/Dialogs")
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

  const closedMixin = (theme: Theme): CSSObject => ({
    paddingLeft: `calc(${theme.spacing(8)} + 1px)`,
    paddingTop: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(${theme.spacing(9)} + 1px)`,
      paddingTop: `calc(${theme.spacing(9)} + 1px)`,
    },
  });

  const PaddingBox = styled("main")(({ theme }) => ({
    ...closedMixin(theme),
  }));

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Header />

      <PaddingBox>
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
      </PaddingBox>
    </Container>
  );
};
type PropsType = {};
