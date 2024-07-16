/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import InfoIcon from "@mui/icons-material/Info";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar-links-container">
        <button className="primary-button">Join our Discord Server</button>
      </div>
    </nav>
  );
};

export default Navbar;