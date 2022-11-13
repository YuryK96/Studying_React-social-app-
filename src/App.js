import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Messages/*" element={<DialogsContainer />} />
        <Route path="/Users" element={<UsersContainer />} />
        <Route path="/Setting" element={<Settings />} />
        <Route path="/News" element={<News />} />
        <Route path="/Music" element={<Music />} />
      </Routes>
    </div>
  );
};

export default App;
