import React from "react";
import "./about.css";
import CallRecive from "..//img/call-received.svg";
import Ceo from "../img/ceo.png";

const About = () => {
  return (
    <>
      <section className="hero-section service-hero-section">
        <div className="container">
          <div className="hero-contant service-hero-img about-us-hero-contant">
            <h1 className="hero-hading">About us</h1>
            <p className="hero-pera service-hero-pera">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <video className="hero-video" controls>
            <source src="../img/video.mp4" type="video/mp4" />
            <source src="../img/video.ogg" type="video/ogg" />
          </video>
        </div>
      </section>
      <section className="mission-section">
        <div className="container">
          <div className="mission-block">
            <div className="mission-block-left">
              <h4 className="mission-h4">Our Mission</h4>
              <h2 className="mission-h2">
                Our team dedicated to help find smart home product
              </h2>
              <div className="experience-block">
                <div className="mission-block-1">
                  <span className="mission-block-span-1">20+</span>
                  <span className="mission-block-span-2">Years Experience</span>
                </div>
                <div className="mission-block-2">
                  <span className="mission-block-span-1">483</span>
                  <span className="mission-block-span-2">Happy Client</span>
                </div>
                <div className="mission-block-3">
                  <span className="mission-block-span-1">150+</span>
                  <span className="mission-block-span-2">Project Finished</span>
                </div>
              </div>
            </div>
            <div className="mission-block-right">
              <div className="mission-contant">
                <div className="mission-img-block">
                  <img src={CallRecive} alt="" />
                </div>
                <div className="mission-img-contant">
                  <span className="mission-right-span">24/7 Supports</span>
                  <p className="mission-right-p">
                    24/7 support means a support service that is provided 24
                    hours a day and 7 days a week.
                  </p>
                </div>
              </div>
              <div className="mission-contant">
                <div className="mission-img-block">
                  <img src={CallRecive} alt="" />
                </div>
                <div className="mission-img-contant">
                  <span className="mission-right-span">24/7 Supports</span>
                  <p className="mission-right-p">
                    24/7 support means a support service that is provided 24
                    hours a day and 7 days a week.
                  </p>
                </div>
              </div>
              <div className="mission-contant">
                <div className="mission-img-block">
                  <img src={CallRecive} alt="" />
                </div>
                <div className="mission-img-contant">
                  <span className="mission-right-span">24/7 Supports</span>
                  <p className="mission-right-p">
                    24/7 support means a support service that is provided 24
                    hours a day and 7 days a week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <div className="team-header-left">
              <h4 className="team-h4">Our Team</h4>
              <h2 className="team-h2">Meet our leading and strong team</h2>
            </div>
            <div className="team-header-right">
              <p className="team-p">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>
          </div>
          <div className="team-detail">
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
            <div className="team-detail-contant">
              <img className="team-detail-img" src={Ceo} alt="" />
              <span className="team-detail-span-1">Jesse Depp</span>
              <span className="team-detail-span-2">Founder & CEO</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
