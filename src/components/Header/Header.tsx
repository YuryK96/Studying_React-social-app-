import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth-reducer";

import { getIsAuth, getLogin } from "../../redux/auth-selectors";
import { AppDispatch } from "../../redux/redux-store";
import s from "./Header.module.css";

const Header: React.FC<HeaderType> = ({}) => {
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const login = useSelector(getLogin);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            sx={{
              height: 34,
            }}
            alt="Logo"
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          />
          <Button sx={{ ml: "85%" }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

    // <header className={s.header}>
    //   <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />

    //   <div className={s.loginBlock}>
    //     {isAuth ? (
    //       <div>
    //         <span>{login} </span>
    //         <button onClick={onLogOut}>LogOut</button>
    //       </div>
    //     ) : (
    //       <NavLink to="/Login">Login</NavLink>
    //     )}
    //   </div>
    // </header>
  );
};

export default Header;

type HeaderType = {};
