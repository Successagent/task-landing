import React from "react";
import "./Header.css";
import HeaderLogo from "../../asset/bell_bread.png";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../Button/Button";
import hamburger from "../../asset/hamburger.svg";
import Motion from "../Motion";
import MotionX from "../MotionX";
import MotionRight from "../MotionRight";

const Header = () => {
  return (
    <header>
      <div className="header_logo">
        <Motion>
          <img src={HeaderLogo} alt="" />
        </Motion>
      </div>
      <MotionX>
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
      </MotionX>
      <MotionRight>
        <Button
          background={"white"}
          height={50}
          width={180}
          title={"Contact us"}
        />
      </MotionRight>
      <img className="hamburger" src={hamburger} alt="" />
    </header>
  );
};

export default Header;
