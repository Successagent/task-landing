import React from "react";
import apple from "../asset/appstore.png";
import playstore from "../asset/playstore.png";
import MotionX from "./MotionX";
import Motion from "./Motion";
import MotionRight from "./MotionRight";

const GetStarted = () => {
  return (
    <section className="get_started_section">
      <div>
        <MotionX>
          <h2 style={{ color: "black" }}>Get started!</h2>
        </MotionX>
        <Motion>
          <p>
            Fresh food everyday on Adiza. You will love our sizzling hot menu
          </p>
        </Motion>
      </div>
      <MotionRight>
        <div className="download_sect">
          <img src={apple} alt="" />
          <img src={playstore} alt="" />
        </div>
      </MotionRight>
    </section>
  );
};

export default GetStarted;
