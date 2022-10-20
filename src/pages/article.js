import React from "react";
import { NavLink } from "react-router-dom";
import LeftArrow from "../img/left-aero.svg";
import RightArrow from "../img/right-aero.svg";
import Profile from "../img/profile-img.png";
import NewsCard1 from "../img/news-img-1.png";
import Profile1 from "../img/profile-img-1.png";
import Profile2 from "../img/profile-img-2.png";
import Filter2 from "../img/filter-2.svg";
import Topic1 from "../img/topic-img-1.png";
import Topic2 from "../img/topic-img-2.png";
import Topic3 from "../img/topic-img-3.png";
import TopicPro1 from "../img/topic-pro-1.png";
import TopicPro2 from "../img/topic-pro-2.png";
import TopicPro3 from "../img/topic-pro-3.png";
import "./article.css";

const Article = () => {
  return (
    <>
      <section className="article-hero-section">
        <div className="container">
          <div className="hero-contant service-hero-img">
            <h1 className="hero-hading">Articles</h1>
            <p className="hero-pera service-hero-pera">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <div className="article-hero-img">
            <NavLink to="#" className="left-btn-a">
              <img className="left-btn-img" src={LeftArrow} alt="" />
            </NavLink>
            <NavLink to="#" className="left-btn-a">
              <img className="left-btn-img" src={RightArrow} alt="" />
            </NavLink>
          </div>
          <div className="article-wapper">
            <div className="article-hero-contant-block">
              <div className="article-hero-contant">
                <span className="article-hero-span">Tips and Trick</span>
                <h3 className="article-hero-h3">
                  This 400-Square-Foot New York Apartment Is Maximized With
                  Custom Millwork
                </h3>
                <div className="article-hero-profile">
                  <div className="article-hero-profile-img-name">
                    <img
                      className="article-hero-profile-img"
                      src={Profile}
                      alt=""
                    />
                    <span className="article-hero-profile-span">
                      By Morgan Goldberg
                    </span>
                  </div>
                  <div className="article-hero-profile-date">
                    Tuesday, 17 May 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="container">
          <div className="news-heading">
            <h4 className="news-h4">Daily News</h4>
            <h2 className="news-h2">Today top headlines</h2>
          </div>
          <div className="news-card-block">
            <div className="news-card">
              <img className="news-card-img" src={NewsCard1} alt="" />
              <span className="news-card-span">Design Inspiration</span>
              <h3 className="news-card-h3">
                Bedroom Design is the Most Personal
              </h3>
              <p className="news-card-p">
                Is it true that the bedroom design is the most personal
                reflection of the owner? Many people believe that to be able to
                judge a person's
              </p>
              <div className="article-hero-profile">
                <div className="article-hero-profile-img-name">
                  <img
                    className="article-hero-profile-img"
                    src={Profile1}
                    alt=""
                  />
                  <span className="article-hero-profile-span">
                    By Jenny Agnes
                  </span>
                </div>
                <div className="article-hero-profile-date">
                  Tuesday, 17 May 2022
                </div>
              </div>
            </div>
            <div className="news-card">
              <img className="news-card-img" src={NewsCard1} alt="" />
              <span className="news-card-span">Design Inspiration</span>
              <h3 className="news-card-h3">
                Bedroom Design is the Most Personal
              </h3>
              <p className="news-card-p">
                Is it true that the bedroom design is the most personal
                reflection of the owner? Many people believe that to be able to
                judge a person's
              </p>
              <div className="article-hero-profile">
                <div className="article-hero-profile-img-name">
                  <img
                    className="article-hero-profile-img"
                    src={Profile2}
                    alt=""
                  />
                  <span className="article-hero-profile-span">
                    By Juliana Athorn
                  </span>
                </div>
                <div className="article-hero-profile-date">
                  Tuesday, 17 May 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="topic-section">
        <div className="container">
          <div className="topic-header">
            <h4 className="topic-header-h4">Trending Topics</h4>
            <h2 className="topic-header-h2">Popular last week</h2>
          </div>
          <div className="topic-header-bottom">
            <ul className="topic-header-bottom-block">
              <li className="topic-header-list-all">
                <NavLink to="#" className="topic-header-a-all">
                  All
                </NavLink>
              </li>
              <li className="topic-header-list thl-1">
                <NavLink to="#" className="topic-header-a">
                  Tips and Trick
                </NavLink>
              </li>
              <li className="topic-header-list thl-2">
                <NavLink to="#" className="topic-header-a">
                  Interior Design
                </NavLink>
              </li>
              <li className="topic-header-list thl-3">
                <NavLink to="#" className="topic-header-a">
                  Design Inspiration
                </NavLink>
              </li>
              <li className="topic-header-list thl-4">
                <NavLink to="#" className="topic-header-a">
                  Color Guide
                </NavLink>
              </li>
            </ul>
            <NavLink className="topic-filter-box" to="#">
              <img className="topic-filter-img" src={Filter2} alt="" />
              <span className="topic-filter-span">Filter</span>
            </NavLink>
          </div>
          <div className="topic-contant-block">
            <div className="topic-contant">
              <img className="topic-card-img" src={Topic1} alt="" />
              <div className="topic-card-contant">
                <spam className="topic-card-span">Tips and Trick</spam>
                <h3 className="topic-card-h3">
                  Beautiful and Functional Home Terrace Decoration
                </h3>
                <p className="topic-card-p">
                  Home terrace decorations are part of every decoration or
                  overall home design. Interiordesign.id – If by chance your
                  house has enough space or space.
                </p>
                <div className="article-hero-profile">
                  <div className="article-hero-profile-img-name">
                    <img
                      className="article-hero-profile-img"
                      src={TopicPro1}
                      alt=""
                    />
                    <span className="article-hero-profile-span">
                      By Morgan Goldberg
                    </span>
                  </div>
                  <div className="article-hero-profile-date">
                    Friday, 1 April 2022
                  </div>
                </div>
              </div>
            </div>
            <div className="topic-contant">
              <img className="topic-card-img" src={Topic2} alt="" />
              <div className="topic-card-contant">
                <spam className="topic-card-span">Design Inspiration</spam>
                <h3 className="topic-card-h3">
                  Modern Minimalist Home Design: Aesthetics of Modern Home
                  Interiors
                </h3>
                <p className="topic-card-p">
                  Home terrace decorations are part of every decoration or
                  overall home design. Interiordesign.id – If by chance your
                  house has enough space or space.
                </p>
                <div className="article-hero-profile">
                  <div className="article-hero-profile-img-name">
                    <img
                      className="article-hero-profile-img"
                      src={TopicPro2}
                      alt=""
                    />
                    <span className="article-hero-profile-span">
                      By Rizal Ahmad
                    </span>
                  </div>
                  <div className="article-hero-profile-date">
                    Wednesday, 17 March 2022
                  </div>
                </div>
              </div>
            </div>
            <div className="topic-contant">
              <img className="topic-card-img" src={Topic3} alt="" />
              <div className="topic-card-contant">
                <spam className="topic-card-span">Color Guide</spam>
                <h3 className="topic-card-h3">
                  20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look
                  More Fun
                </h3>
                <p className="topic-card-p">
                  Home terrace decorations are part of every decoration or
                  overall home design. Interiordesign.id – If by chance your
                  house has enough space or space.
                </p>
                <div className="article-hero-profile">
                  <div className="article-hero-profile-img-name">
                    <img
                      className="article-hero-profile-img"
                      src={TopicPro3}
                      alt=""
                    />
                    <span className="article-hero-profile-span">
                      By Filipus Pendi
                    </span>
                  </div>
                  <div className="article-hero-profile-date">
                    Saturday, 29 February 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic-a">
            <NavLink to="#" className="topic-link">
              Load More
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
