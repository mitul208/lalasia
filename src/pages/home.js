import React from "react";
import Hero from "../img/hero-img.png";
import Card1 from "../img/card-img-1.svg";
import Card2 from "../img/card-img-2.svg";
import Card3 from "../img/card-img-3.svg";
import Chair from "../img/chair.png";
import qulaty1 from "../img/qulaty-1.png";
import qulaty2 from "../img/qulaty-2.png";
import { NavLink } from "react-router-dom";
import Queta from "../img/quote-up.svg";
import Coper from "../img/janne cooper.svg";
import Star from "../img/star.svg";
import Article from "../img/articles-img-2.png";
import Jeary from "../img/jerremy.png";
import Article2 from "../img/articles-img-3.png";
import Kim from "../img/kim.png";
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-contant">
            <h1 className="hero-hading">
              Discover Furniture With High Quality Wood
            </h1>
            <p className="hero-pera">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
          </div>
          <form className="search-block">
            <input
              type="text"
              placeholder="search property"
              className="search-input"
            />
            <button type="button" className="praimary-btn">
              search
            </button>
          </form>
          <img className="hero-img" src={Hero} alt="" />
        </div>
      </section>
      <section className="services-section" id="services">
        <div className="container">
          <div className="service-contant">
            <div className="service-hading">
              <h4 className="service-h4">Benefits</h4>
              <h2 className="service-h2">Benefits when using our services</h2>
            </div>
            <p className="service-pera">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="card-block">
            <div className="service-card">
              <div className="card">
                <img src={Card1} alt="" />
                <h3 className="card-h3">Many Choices</h3>
                <p className="card-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="card">
                <img src={Card2} alt="" />
                <h3 className="card-h3">Fast and On Time</h3>
                <p className="card-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="card">
                <img src={Card3} alt="" />
                <h3 className="card-h3">Affordable Price</h3>
                <p className="card-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section" id="product">
        <div className="container">
          <div className="product-contant">
            <h4 className="product-h4">product</h4>
            <h2 className="product-h2">Our popular product</h2>
            <p className="product-p">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="announcement">
            <div className="img-card">
              <div className="img-card-wapper">
                <img src={Chair} alt="" className="chair" />
              </div>
              <p className="img-card-p1">chair</p>
              <h3 className="img-card-h31">White Aesthetic Chair</h3>
              <p className="img-card-p2">Combination of wood and wool</p>
              <h3 className="img-card-h32">$63.47</h3>
            </div>
            <div className="img-card">
              <div className="img-card-wapper">
                <img src={Chair} alt="" className="chair" />
              </div>
              <p className="img-card-p1">lamp</p>
              <h3 className="img-card-h31">Bardono Smart Lamp</h3>
              <p className="img-card-p2">
                Easy to use with bluetooth connection
              </p>
              <h3 className="img-card-h32">$63.47</h3>
            </div>
            <div className="img-card">
              <div className="img-card-wapper">
                <img src={Chair} alt="" className="chair" />
              </div>
              <p className="img-card-p1">lamp</p>
              <h3 className="img-card-h31">Bardono Smart Lamp</h3>
              <p className="img-card-p2">
                Easy to use with bluetooth connection
              </p>
              <h3 className="img-card-h32">$63.47</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="our-product-section">
        <div className="container">
          <div className="qulity-block">
            <div className="left-block">
              <h4 className="left-h4">our product</h4>
              <h2 className="left-h2">
                Crafted by talented and high quality material
              </h2>
              <p className="left-p">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
                morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
              </p>
              <NavLink
                className="left-button"
                href="./product-details/product-detail.html"
              >
                learn more
              </NavLink>
              <img className="left-img" src={qulaty1} alt="" />
            </div>
            <div className="right-block">
              <div className="upper-block">
                <div className="upper-block-1">
                  <h3 className="upper-h3">20+</h3>
                  <p className="upper-p">Years Experience</p>
                </div>
                <div className="upper-block-2">
                  <h3 className="upper-h3">483</h3>
                  <p className="upper-p">Happy Client</p>
                </div>
                <div className="upper-block-3">
                  <h3 className="upper-h3">150+</h3>
                  <p className="upper-p">Project Finished</p>
                </div>
              </div>
              <div className="right-img">
                <img src={qulaty2} alt="" className="lover-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Testimonials-section">
        <div className="container">
          <div className="Testimonials-upper">
            <h4 className="Testimonials-h4">Testimonials</h4>
            <h2 className="Testimonials-h2">What our customer say</h2>
            <p className="Testimonials-p">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="testimonials-card">
            <div className="test-card">
              <div className="Testimonials-lower">
                <img src={Queta} alt="" className="quote-img" />
                <p className="Testimonials-lower-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <div className="profile">
                  <div className="profile-left">
                    <img src={Coper} alt="" />
                    <p>Janne Cooper</p>
                  </div>
                  <div className="profile-right">
                    <img src={Star} alt="" />
                    <p>4.3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="Testimonials-lower">
                <img src={Queta} alt="" className="quote-img" />
                <p className="Testimonials-lower-p">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <div className="profile">
                  <div className="profile-left">
                    <img src={Coper} alt="" />
                    <p>Janne Cooper</p>
                  </div>
                  <div className="profile-right">
                    <img src={Star} alt="" />
                    <p>4.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-section" id="article">
        <div className="container">
          <div className="article">
            <div className="article-left">
              <div className="left-upper">
                <h4 className="article-h4">Articles</h4>
                <h2 className="article-h2">
                  The best furniture comes from Lalasia
                </h2>
                <p className="article-p">
                  Pellentesque etiam blandit in tincidunt at donec.
                </p>
              </div>
              <div className="left-lower">
                <div className="img-contant">
                  <span className="img-hading">Tips and Trick</span>
                  <h3 className="img-h3">Create Cozy Dinning Room Vibes</h3>
                  <p className="img-p">
                    Decorating with neutrals brings balance to the dining room.
                    With eclectic decoration on the sides, Caruso Dining Table
                    and Cyrillo Dining Chairs elevate the tonal base of the
                    room. The modern furniture set gives personality to any
                    space in all types of architecture.‎ The wide volume enables
                    everyone to sit back and relax, be it in the dining room,
                    conference, or office.
                  </p>
                  <NavLink to="#" className="img-a">
                    read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="article-right">
              <div className="right-said">
                <div className="right-said-img">
                  <img className="right-img" src={Article} alt="" />
                </div>
                <div className="right-contant">
                  <span className="rihgt-span">Tips and Trick</span>
                  <h3 className="right-h3">
                    6 ways to give your home minimalistic vibes
                  </h3>
                  <p className="right-p">Pellentesque etiam blandit in</p>
                  <div className="article-profile">
                    <div className="profile-contant">
                      <img className="profile-img" src={Jeary} alt="" />
                      <span className="profile-name">By Jerremy Jean</span>
                    </div>
                    <span className="profile-date">Friday, 1 April 2022</span>
                  </div>
                </div>
              </div>
              <div className="right-said michaela-profile">
                <div className="right-said-img">
                  <img className="right-img" src={Article2} alt="" />
                </div>
                <div className="right-contant">
                  <span className="rihgt-span">Design Inspiration</span>
                  <h3 className="right-h3">
                    How to make your interiors cooler and more stylish
                  </h3>
                  <p className="right-p">Pellentesque etiam blandit in</p>
                  <div className="article-profile">
                    <div className="profile-contant">
                      <img className="profile-img" src={Article} alt="" />
                      <span className="profile-name">By Michaela Augus</span>
                    </div>
                    <span className="profile-date">Friday, 1 April 2022</span>
                  </div>
                </div>
              </div>
              <div className="right-said">
                <div className="right-said-img">
                  <img className="right-img" src={Article} alt="" />
                </div>
                <div className="right-contant">
                  <span className="rihgt-span">Tips and Trick</span>
                  <h3 className="right-h3">
                    Elements to add character to your space
                  </h3>
                  <p className="right-p">Pellentesque etiam blandit in</p>
                  <div className="article-profile">
                    <div className="profile-contant">
                      <img className="profile-img" src={Kim} alt="" />
                      <span className="profile-name">By Kim Gurameh</span>
                    </div>
                    <span className="profile-date">Friday, 1 April 2022</span>
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

export default Home;
