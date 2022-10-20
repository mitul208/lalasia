import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Article from "./pages/article";
import Service from "./pages/service";
import Navmanu from "./componetns/navmanu";
import "./App.css";
import Fotter from "./componetns/fotter";
import "./font.css";
import Product from "./pages/product";

const App = () => {
  const [isFooterShow, setIsFooterShow] = useState(false);
  useEffect(() => {
    const isFooterShow = "/product" === window.location.pathname;
    setIsFooterShow(isFooterShow);
  }, [isFooterShow]);
  return (
    <>
      <Router>
        <Navmanu />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Service />}></Route>
          <Route exact path="/Article" element={<Article />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
        </Routes>
        {!isFooterShow && <Fotter />}
      </Router>
    </>
  );
};

export default App;
