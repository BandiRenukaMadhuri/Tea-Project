

import React from "react";
import Banner from "./banner";
import TeaCards from "./teaCards";
import Products from "./products";
import Featured from "./Featured";
import Store from "./Store";
import Contact from "./Contact";


const Body = () => {
  return (
    <div>
    <Banner/>
       <TeaCards />
       <Products />
       <Featured />
       <Store/>
       <Contact />
       </div>
  );
}

export default Body;



