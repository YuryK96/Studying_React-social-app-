import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
 
  return (
    <BrowserRouter>
    
    <div className="app-wrapper">
      <Header />
      <Nav  />
     <Routes>
      <Route path="/Profile" element={<Profile myPostData={props.appState.profilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText} />}/>
      <Route path="/Messages" element={<Dialogs dialogsData={props.appState.dialogsPage} addMessage={props.addMessage} />}/>
      <Route path="/Setting" element={<Settings/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Music" element={<Music/>}/>
    </Routes>

    </div>

 </BrowserRouter>
  );
}

export default App;
