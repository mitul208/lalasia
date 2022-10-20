import React from "react";
import { NavLink } from "react-router-dom";
import "./product.css";
import Leftarrow from "../img/left-aero.svg";
import Rightarrow from "../img/right-aero.svg";
import Filtter from "../img/filter.svg";
import Short from "../img/sort.svg";
import Chair from "../img/chair.png";
import Fotter from "../componetns/fotter";

const Product = () => {
  return (
    <>
      <section className="product-hero-section">
        <div className="container">
          <div className="hero-product-contant">
            <h1 className="product-heading">product</h1>
            <p className="product-pera">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
        </div>
        <div className="product-hero-img">
          <NavLink className="aero-left-a" to="#">
            <img className="aero-left" src={Leftarrow} alt="" />
          </NavLink>
          <div className="hero-img-contant">
            <span className="hero-img-span">Discount</span>
            <h2 className="hero-img-heading">Ramadhan Sale Offer</h2>
            <p className="hero-img-pera">
              Get 40% off for the first transaction on Lalasia
            </p>
          </div>
          <NavLink className="aero-right-a" to="#">
            <img className="aero-right" src={Rightarrow} alt="" />
          </NavLink>
        </div>
      </section>
      <section className="main-product-section">
        <div className="container">
          <div className="main-upper-block">
            <form className="product-main-form">
              <input
                type="text"
                placeholder="search property"
                className="search-input"
              />
              <button type="submit" className="form-btn">
                search
              </button>
            </form>
            <div className="filter-block">
              <img src={Filtter} alt="" />
              <span className="filter-span">Filter</span>
            </div>
          </div>
          <div className="main-lower-block">
            <div className="main-header-block">
              <div className="main-header-left">
                <h2 className="main-left-h2">Total Product</h2>
                <span className="main-left-span">184</span>
              </div>
              <div className="main-header-right">
                <img className="main-right-img" src={Short} alt="" />
                <span className="main-right-span">Sort By</span>
              </div>
            </div>
            <div className="main-product-block">
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
              <div className="main-product-block-wapper">
                <img src={Chair} alt="" className="chair" />
                <p className="img-card-p1">chair</p>
                <h3 className="img-card-h31">White Aesthetic Chair</h3>
                <p className="img-card-p2">Combination of wood and wool</p>
                <h3 className="img-card-h32">$63.47</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Fotter isNewsLattershow={true} />
    </>
  );
};

export default Product;
