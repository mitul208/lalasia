import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./fotter.css";

function Fotter(props) {
  const { isNewsLattershow } = props;
  return (
    <>
      <section className="footer-section" id="about-us">
        <div className="container">
          {isNewsLattershow && (
            <div class="footer-upper-block">
              <h2 class="footer-h2">Join with me to get special discount</h2>
              <a href="#" class="footer-a-link">
                <p>Learn More</p>
                <i class="material-symbols-outlined"> arrow_right_alt</i>
              </a>
            </div>
          )}
          <div className="footer-lower-block">
            <div className="footer-left">
              <NavLink to="#" className="footer-logo">
                <img src={logo} alt="" />
              </NavLink>
              <p className="footer-p">
                Lalasia is digital agency that help you make better experience
                iaculis cras in.
              </p>
            </div>
            <div className="footer-right">
              <ul className="footer-list">
                <li className="list-hading">Product</li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    New Arrivals
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Best Selling
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Home Decor
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Kitchen Set
                  </NavLink>
                </li>
              </ul>
              <ul className="footer-list footer-list-services">
                <li className="list-hading">Services</li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Catalog
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Blogg
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    FaQr
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Pricingt
                  </NavLink>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="list-hading">Follow Us</li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Facebook
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Instagram
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="#" className="footer-link">
                    Twitter
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fotter;
