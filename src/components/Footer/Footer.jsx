import React from "react";
import GetStarted from "../GetStarted";
import HeaderLogo from "../../asset/footerlogo.png";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import facebook from "../../asset/facebook.svg";
import instagram from "../../asset/instagram.svg";
import twitter from "../../asset/twitter.svg";
import Motion from "../Motion";
import MotionX from "../MotionX";
import MotionRight from "../MotionRight";

const Footer = () => {
  return (
    <footer>
      <GetStarted />
      <section className="footer_links">
        <div className="footer_links_item_one">
          <Motion>
            <img src={HeaderLogo} alt="" />
          </Motion>
          <MotionX>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
              dignissim ornare nunc in.
            </p>
          </MotionX>
        </div>
        <div className="footer_links_item_two">
          <Motion>
            <h3>Quick Links</h3>
          </Motion>
          <MotionX>
            <p>About us</p>
          </MotionX>
          <MotionRight>
            <p>Privacy policy</p>
          </MotionRight>
          <Motion>
            <p>Terms of service</p>
          </Motion>
        </div>
        <div className="footer_links_item_three">
          <Motion>
            <h3>Contact us</h3>
          </Motion>
          <MotionX>
            <div className="flex">
              <GoLocation size={18} color="white" style={{ width: "20%" }} />
              <p>
                No 5 Lorem ipsum dolor sit amet consectetur. Ultricies volutpat
                ut dignissim ornare nunc in.
              </p>
            </div>
          </MotionX>
          <MotionRight>
            <div className="flex">
              <BsTelephone size={18} color="white" style={{ width: "10%" }} />
              <p>01223345676</p>
            </div>
          </MotionRight>
        </div>
      </section>
      <section className="footer_contact">
        <p>
          <Motion>© All Rights Reserved. 2023, AdizaFoods</Motion>
        </p>
        <div className="footer_icon_section">
          <MotionX>
            <img src={facebook} alt="" />
          </MotionX>
          <Motion>
            <img src={instagram} alt="" />
          </Motion>
          <MotionRight>
            <img src={twitter} alt="" />
          </MotionRight>
        </div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
