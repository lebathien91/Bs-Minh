import React from "react";

import About from "./About";
import Blog from "./Blog";
import Department from "./Deparment";
import Doctors from "./Doctors";
import Gallery from "./Gallery";
import Home from "./Home";
import Price from "./Price";

const Contents = () => {
  return (
    <>
      <Home />

      <About />
      <Department />

      <Doctors />
      <Blog />

      <Price />
      <Gallery />
    </>
  );
};

export default Contents;
