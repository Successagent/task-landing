import React from "react";
import GetStarted from "../GetStarted";
import HeaderLogo from "../../asset/bell_bread.png";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import facebook from "../../asset/facebook.svg";
import instagram from "../../asset/instagram.svg";
import twitter from "../../asset/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <GetStarted />
      <section className="footer_links">
        <div className="footer_links_item_one">
          <img src={HeaderLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
            dignissim ornare nunc in.
          </p>
        </div>
        <div className="footer_links_item_two">
          <h3>Quick Links</h3>
          <p>About us</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
        <div className="footer_links_item_three">
          <h3>Contact us</h3>
          <div>
            <GoLocation size={18} color="white" style={{ width: "20%" }} />
            <p>
              No 5 Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
              dignissim ornare nunc in.
            </p>
          </div>
          <div>
            <BsTelephone size={18} color="white" style={{ width: "10%" }} />
            <p>01223345676</p>
          </div>
        </div>
      </section>
      <section className="footer_contact">
        <p>© All Rights Reserved. 2023, AdizaFoods</p>
        <div className="footer_icon_section">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
