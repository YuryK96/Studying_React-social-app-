import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth-reducer";
import { styled } from "@mui/material/styles";
import { getIsAuth, getLogin } from "../../redux/auth-selectors";
import { AppDispatch } from "../../redux/redux-store";
import s from "./Header.module.scss";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import { useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useWindowSize } from "../hook/useWindowSize";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<HeaderType> = ({}) => {
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const login = useSelector(getLogin);
  const windowWidth = useWindowSize();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {windowWidth.width < 500 && open ? (
            ""
          ) : (
            <>
              <Box
                component="img"
                sx={{
                  height: 34,
                  p: "inherit",
                }}
                alt="Logo"
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              />

              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "85%",
                  transition: 1,
                }}
              >
                {isAuth ? (
                  <>
                    <Typography
                      variant="button"
                      color={"tomato"}
                      sx={{
                        fontSize: "default",
                        display: "flex",
                        mr: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      {login}{" "}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{}}
                      onClick={onLogOut}
                      color="secondary"
                    >
                      LogOut
                    </Button>
                  </>
                ) : (
                  <NavLink to="/Login" className={s.loginLink}>
                    <Button variant="outlined" sx={{}} color="inherit">
                      Login
                    </Button>
                  </NavLink>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <DrawerMenu isOpen={open} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
};

export default Header;

type HeaderType = {};
