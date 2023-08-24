import React, { useState } from "react";
import { Button, Header, MotionRight, Motion, MotionX } from "./components";
import intro from "./asset/intro.png";
import apple from "./asset/appstore.png";
import playstore from "./asset/playstore.png";
import { itemOne, pinTabs } from "./utils/data";
import truck from "./asset/truck.png";
import what1 from "./asset/what1.png";
import what2 from "./asset/what2.png";
import what3 from "./asset/what3.png";
import faq from "./asset/faq.png";
import Footer from "./components/Footer/Footer";

const LandingPage = () => {
  const [tab, setTab] = useState(1);
  const [faqTab, setFaqTab] = useState(1);

  return (
    <section className="landing_page">
      <Header />
      <section className="hero_section">
        <div className="hero_sect_text_container">
          <Motion>
            <h1 className="header_text">Get food delivered to you ASAP!</h1>
          </Motion>
          <MotionX>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
              dignissim ornare nunc in. Est a tortor eget aenean dignissim.
              Cursus aenean magna nulla
            </p>
          </MotionX>
          <MotionRight>
            <div className="download_sect">
              <img src={apple} alt="" />
              <img src={playstore} alt="" />
            </div>
          </MotionRight>
          <MotionX>
            <p className="download_text">
              Download the mobile app from any store available to you.
            </p>
          </MotionX>
        </div>
        <div className="hero_sect_image_container">
          <MotionRight>
            <img src={intro} alt="" />
          </MotionRight>
        </div>
      </section>
      <section id="about" className="landing_section_two">
        {pinTabs.map((item, key) => {
          return (
            <div
              className={`pin_tabs ${tab === 1 && key === 0 ? "active" : ""}`}
              key={key}
            >
              <div className="pin_text_tab">
                <MotionX>
                  <p style={{ color: "white" }} className="paragraph">
                    {item.paragraph}
                  </p>
                </MotionX>
                <Motion>
                  <h1 style={{ color: "white" }} className="header_text">
                    {item.title}
                  </h1>
                </Motion>
                <MotionX>
                  <Button
                    color={"#178C49"}
                    background={"white"}
                    height={50}
                    width={212}
                    title={"Contact us"}
                  />
                </MotionX>
              </div>
              <div className="pin_img_tab">
                <div className="truck">
                  <Motion>
                    <img src={truck} alt="" />
                  </Motion>
                </div>
                <MotionX>
                  <h2>{item.intro}</h2>
                </MotionX>
                <MotionRight>
                  <p>{item.paragraph2}</p>
                </MotionRight>
              </div>
            </div>
          );
        })}
      </section>
      <section id="process" className="what_we_do desktop_view">
        <div className="hero_text_container">
          <Motion>
            <h2>How it works</h2>
          </Motion>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={what1} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">1</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>Browse and Place Order</h2>
            </MotionRight>
            <Motion>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                dignissim ornare nunc in. Est a tortor eget aenean dignissim
              </p>
            </Motion>
            <MotionX>
              <Button
                background={"#3BD07B"}
                color={"white"}
                width={212}
                height={50}
                title={"Download now"}
              />
            </MotionX>
          </div>
        </div>
        <div
          className="what_we_do_items"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="what_image_container">
            <Motion>
              <img src={what2} alt="" />
            </Motion>
          </div>
          <div className="what_hr">
            <div className="indicator">2</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>Fast Delivery to Location</h2>
            </MotionRight>
            <MotionX>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                dignissim ornare nunc in. Est a tortor eget aenean dignissim
              </p>
            </MotionX>
            <Motion>
              <Button
                background={"#3BD07B"}
                color={"white"}
                width={212}
                height={50}
                title={"Download now"}
              />
            </Motion>
          </div>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={what3} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">3</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <Motion>
              <h2>Receive and Enjoy</h2>
            </Motion>
            <MotionRight>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                dignissim ornare nunc in. Est a tortor eget aenean dignissim
              </p>
            </MotionRight>
            <MotionX>
              <Button
                background={"#3BD07B"}
                color={"white"}
                width={212}
                height={50}
                title={"Download now"}
              />
            </MotionX>
          </div>
        </div>
      </section>
      <section id="process" className="what_we_do mobile_view">
        <div className="hero_text_container">
          <Motion>
            <h2>How it works</h2>
          </Motion>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={what1} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">1</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>Browse and Place Order</h2>
            </MotionRight>
            <Motion>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                dignissim ornare nunc in. Est a tortor eget aenean dignissim
              </p>
            </Motion>
            <MotionX>
              <Button
                background={"#3BD07B"}
                color={"white"}
                width={212}
                height={50}
                title={"Download now"}
              />
            </MotionX>
          </div>
        </div>
        <div
          className="what_we_do_items"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="what_image_container">
            <Motion>
              <img src={what2} alt="" />
            </Motion>
          </div>
          <div className="what_hr">
            <div className="indicator">2</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>Fast Delivery to Location</h2>
            </MotionRight>
            <MotionX>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                dignissim ornare nunc in. Est a tortor eget aenean dignissim
              </p>
            </MotionX>
            <Motion>
              <Button
                background={"#3BD07B"}
                color={"white"}
                width={212}
                height={50}
                title={"Download now"}
              />
            </Motion>
          </div>
        </div>
        <div className="what_we_do_items">
          <div className="what_hr">
            <div className="indicator">3</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div>
            <div className="what_image_container">
              <MotionX>
                <img src={what3} alt="" />
              </MotionX>
            </div>
            <div className="what_text_container">
              <Motion>
                <h2>Receive and Enjoy</h2>
              </Motion>
              <MotionRight>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultricies volutpat ut
                  dignissim ornare nunc in. Est a tortor eget aenean dignissim
                </p>
              </MotionRight>
              <MotionX>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                />
              </MotionX>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="section_faq">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <Motion>
            <h1 style={{ textAlign: "center" }} className="header_text">
              FAQs
            </h1>
          </Motion>
        </div>
        <div>
          <div className="scrollble">
            <div className="what_image_container">
              <Motion>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 1 ? "#3BD07B" : "white"}
                  title={"Faq question one for the needed questions"}
                  color={faqTab === 1 ? "white" : "#3BD07B"}
                />
              </Motion>
              <MotionRight>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 2 ? "#3BD07B" : "white"}
                  title={"Faq question one for the needed questions"}
                  color={faqTab === 2 ? "white" : "#3BD07B"}
                />
              </MotionRight>
              <MotionX>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 3 ? "#3BD07B" : "white"}
                  title={"Faq question one for the needed questions"}
                  color={faqTab === 3 ? "white" : "#3BD07B"}
                />
              </MotionX>
              <MotionRight>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 4 ? "#3BD07B" : "white"}
                  title={"Faq question one for the needed questions"}
                  color={faqTab === 4 ? "white" : "#3BD07B"}
                />
              </MotionRight>
              <Motion>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 5 ? "#3BD07B" : "white"}
                  title={"Faq question one for the needed questions"}
                  color={faqTab === 5 ? "white" : "#3BD07B"}
                />
              </Motion>
            </div>
          </div>
          <div className="what_hr">
            <div className="hrs">
              {itemOne.slice(0, 20).map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <div>
              <Motion>
                <img src={faq} alt="" />
              </Motion>
              <MotionRight>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Posuere morbi feugiat
                  nec sed rhoncus. Blandit massa quis volutpat amet feugiat
                  lectus ullamcorper ultrices tincidunt. Velit sit morbi ut eu
                  elementum porttitor fames nunc etiam. Sit varius nisl et non
                  velit nulla morbi. Nibh nulla justo quisque tristique egestas.
                </p>
              </MotionRight>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default LandingPage;
