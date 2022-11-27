import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <Routes>
        <Route path="/Profile/:userId" element={<ProfileContainer />} />
        <Route path="/Profile/" element={<ProfileContainer />} />
        <Route path="/Messages/*" element={<DialogsContainer />} />
        <Route path="/Users" element={<UsersContainer />} />
        <Route path="/Setting" element={<Settings />} />
        <Route path="/News" element={<News />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
};

export default App;
