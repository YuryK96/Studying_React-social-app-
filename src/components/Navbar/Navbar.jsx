import NavbarCss from './Navbar.module.css';

const Nav = () => {
    return (
      <nav className={NavbarCss.nav}>
      <div className={NavbarCss.item}><a href="#0">Profile</a></div>
      <div className={NavbarCss.item}><a href="#0">Messages</a></div>
      <div className={NavbarCss.item}><a href="#0">News</a></div>
      <div className={NavbarCss.item}><a href="#0">Music</a></div>
      <div className={NavbarCss.item}><a href="#0">Settings</a></div>
    </nav>
  );
};

export default Nav;