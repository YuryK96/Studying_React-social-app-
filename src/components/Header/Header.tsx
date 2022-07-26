import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type HeaderType = {
  isAuth: boolean;
  login: string | null;
  logOut: () => void;
};

const Header: React.FC<HeaderType> = ({ isAuth, login, logOut }) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />

      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            <span>{login} </span>
            <button onClick={logOut}>LogOut</button>
          </div>
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
