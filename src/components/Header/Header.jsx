import React from "react";
import "./Header.css";
import HeaderLogo from "../../asset/bell_bread.png";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../Button/Button";
import hamburger from "../../asset/hamburger.svg";

const Header = () => {
  return (
    <header>
      <div className="header_logo">
        <img src={HeaderLogo} alt="" />
      </div>
      <ul className="nav_list">
        <Link smooth to={"#about"}>
          About us
        </Link>
        <Link smooth to={"#process"}>
          Process
        </Link>
        <Link smooth to={"#faq"}>
          FAQs
        </Link>
      </ul>
      <Button
        background={"white"}
        height={50}
        width={180}
        title={"Contact us"}
      />
      <img className="hamburger" src={hamburger} alt="" />
    </header>
  );
};

export default Header;
