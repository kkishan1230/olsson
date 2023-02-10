import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/olssonLogo.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex max-w-[1920px] mx-[auto] py-[43px] justify-between items-center px-[60px] md:px-[30px] sm:py-[20px] sm:px-[10px]">
      <NavLink to="/" className="sm:w-[70px]">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="flex gap-8 items-center l:hidden">
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Pages</NavLink>
        <NavLink to="/">cart (0)</NavLink>
        <NavLink to="/">
          <Button text="GET IN TOUCH" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
