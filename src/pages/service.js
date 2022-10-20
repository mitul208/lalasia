import React from "react";
import "./service.css";
import ServiceHero from "../img/service-hero.png";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section className="hero-section service-hero-section">
        <div className="container">
          <div className="hero-contant service-hero-img">
            <h1 className="hero-hading">Services</h1>
            <p className="hero-pera service-hero-pera">
              The product crafted by talented crafter and using high quality
              material with love inside
            </p>
          </div>
          <img className="hero-img" src={ServiceHero} alt="" />
        </div>
      </section>
      <section className="service-card-section">
        <div className="container">
          <div className="benifit">
            <div className="benifit-card">
              <span className="benifit-span">01</span>
              <h4 className="benifit-h4">Furniture</h4>
              <p className="benifit-p">
                At the ultimate smart home, you're met with technology before
                you even step through the front door.
              </p>
            </div>
            <div className="benifit-card">
              <span className="benifit-span">02</span>
              <h4 className="benifit-h4">Home Decoration</h4>
              <p className="benifit-p">
                Create A Calming Summer Escape With Our Luxurious Home
                Accessories For The Balmy Evenings.
              </p>
            </div>
            <div className="benifit-card">
              <span className="benifit-span">03</span>
              <h4 className="benifit-h4">Kitchen Cabinet</h4>
              <p className="benifit-p">
                Introducing the modular kitchen cabinet system. Start with our
                huge selection of base and wall cabinets.
              </p>
            </div>
            <div className="benifit-card">
              <span className="benifit-span">04</span>
              <h4 className="benifit-h4">Interior Design</h4>
              <p className="benifit-p">
                Innovative products often feature innovative designs that play
                with the patterns we are familiar.
              </p>
            </div>
            <div className="benifit-card">
              <span className="benifit-span">05</span>
              <h4 className="benifit-h4">Exterior Design</h4>
              <p className="benifit-p">
                These stylish and resilient products provide up-to-date options
                for roofing, siding, decking, and outdoor spaces.
              </p>
            </div>
            <div className="benifit-card">
              <span className="benifit-span">06</span>
              <h4 className="benifit-h4">Custom Furniture</h4>
              <p className="benifit-p">
                With Quality Materials and Modern Designs, we have Designs for
                all Tastes. we bring you World ClassName Designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Portofolio-section">
        <div className="container">
          <div className="portofolio">
            <div className="Portofolio-header">
              <div className="Portofolio-header-left">
                <h4 className="upper-h4">Portofolio</h4>
                <h2 className="upper-h2">Amazing project we’ve done before</h2>
              </div>
              <div className="Portofolio-header-right">
                <p className="Portofolio-right-upper-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <NavLink to="#" className="Portofolio-right-upper-a">
                  View Portofolio
                </NavLink>
              </div>
            </div>
            <div className="portofolio-contant">
              <div className="portofolio-abc">
                <div className="Portofolio-comtant-left">
                  <div className="Portofolio-img-contant">
                    <h3 className="Portofolio-img-contant-h3">
                      Siska Kohl’s Bedroom
                    </h3>
                    <p className="Portofolio-img-contant-p">
                      We start renovating her bedroom with minimalist
                    </p>
                    <NavLink to="#" className="Portofolio-img-contant-a">
                      See Detail
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="Portofolio-contant-right">
                <div className="Portofolio-right-1">
                  <div className="Portofolio-img-contant">
                    <h3 className="Portofolio-img-contant-h3">
                      Jeruk Veldevana Living Room Design
                    </h3>
                    <p className="Portofolio-img-contant-p">
                      We start renovating her bedroom with minimalist
                    </p>
                    <NavLink to="#" className="Portofolio-img-contant-a">
                      See Detail
                    </NavLink>
                  </div>
                </div>
                <div className="Portofolio-right-2">
                  <div className="Portofolio-img-contant">
                    <h3 className="Portofolio-img-contant-h3">
                      Cozy Co-working space
                    </h3>
                    <p className="Portofolio-img-contant-p">
                      We start renovating her bedroom with minimalist
                    </p>
                    <NavLink to="#" className="Portofolio-img-contant-a">
                      See Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
