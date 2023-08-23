import React from "react";
import GetStarted from "../GetStarted";
import HeaderLogo from "../../asset/bell_bread.png";

const Footer = () => {
  return (
    <footer>
      <GetStarted />
      <section className="footer_links">
        <div>
          <img src={HeaderLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
            dignissim ornare nunc in.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>About us</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <div>
            {"icon"}
            <p>
              No 5 Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
              dignissim ornare nunc in.
            </p>
          </div>
          <div>
            {"icon"}
            <p>01223345676</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
