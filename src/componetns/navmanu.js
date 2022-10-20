import React from "react";
import { NavLink } from "react-router-dom";
import "./navmanu.css";
import Logo from "../img/logo.png";
import Bag from "../img/bag-icon.svg";
import User from "../img/user-icon.svg";
// import About from "../pages/about";

const Navmanu = () => {
  return (
    <>
      <section className="hader-section" id="navbar">
        <div className="container">
          <div className="hader">
            <div className="logo">
              <NavLink to="/" className="logo-link">
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="navbar-iteam">
              <ul className="manu">
                <li className="manu-list">
                  <NavLink to="/product" className="manu-link">
                    product
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="./services" className="manu-link">
                    Services
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="./Article" className="manu-link">
                    Articles
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="/about" className="manu-link">
                    about us
                  </NavLink>
                </li>
              </ul>
              <div className="hader-icon">
                <NavLink to="#" className="icon-link">
                  <img className="icon-img" src={Bag} alt="" />
                </NavLink>
                <NavLink to="#" className="icon-link">
                  <img className="icon-img" src={User} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="manu-btn" id="manuIcon">
              <span className="manu-btn-line-1"></span>
              <span className="manu-btn-line-2"></span>
              <span className="manu-btn-line-3"></span>
            </div>
            <div className="mobail-header" id="mobail-description">
              <ul className="mobail-header-list">
                <li className="manu-list">
                  <NavLink to="./product/product.html" className="manu-link">
                    product
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="./services/service.html" className="manu-link">
                    Services
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="./articles/article.html" className="manu-link">
                    Articles
                  </NavLink>
                </li>
                <li className="manu-list">
                  <NavLink to="./about-us/about-us.html" className="manu-link">
                    about us
                  </NavLink>
                </li>
                <div className="hader-icon">
                  <NavLink to="#" className="icon-link">
                    <img className="icon-img" src="./img/bag-icon.svg" alt="" />
                  </NavLink>
                  <NavLink to="#" className="icon-link">
                    <img
                      className="icon-img"
                      src="./img/user-icon.svg"
                      alt=""
                    />
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navmanu;
