import React from "react";
import apple from "../asset/appstore.png";
import playstore from "../asset/playstore.png";

const GetStarted = () => {
  return (
    <section className="get_started_section">
      <div>
        <h2 style={{ color: "black" }}>Get started!</h2>
        <p>Fresh food everyday on Adiza. You will love our sizzling hot menu</p>
      </div>
      <div className="download_sect">
        <img src={apple} alt="" />
        <img src={playstore} alt="" />
      </div>
    </section>
  );
};

export default GetStarted;
