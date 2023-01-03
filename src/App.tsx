import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";

import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersPage from "./components/Users/UsersPage";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { AppDispatch, AppStateType } from "./redux/redux-store";
import { getInitialized } from "./redux/app-selectors";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/Profile")
);
const { Header, Sider, Content } = Layout;

export const App: React.FC<PropsType> = ({}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const initialize = useSelector(getInitialized);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialize) {
    return <Preloader />;
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/Profile",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "/Messages",
              icon: <VideoCameraOutlined />,
              label: "Messages",
            },
            {
              key: "/Users",
              icon: <UploadOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <HeaderContainer />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 580,
            background: colorBgContainer,
          }}
        >
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/Profile" />} />
              <Route path="/Profile/:userId" element={<ProfileContainer />} />
              <Route path="/Profile/" element={<ProfileContainer />} />

              <Route path="/Messages/*" element={<DialogsContainer />} />

              <Route path="/Users/*" element={<UsersPage />} />
              <Route path="/Setting" element={<Settings />} />
              <Route path="/News" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Login" element={<Login />} />
            </Routes>{" "}
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
type PropsType = {};
