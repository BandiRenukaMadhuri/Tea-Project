

import React from "react";
import Banner from "./banner";
import TeaCards from "./teaCards";
import Products from "./products";
import Featured from "./Featured";
import Store from "./Store";


const Body = () => {
  return (
    <div>
    <Banner/>
       <TeaCards />
       <Products />
       <Featured />
       <Store/>
       </div>
  );
}

export default Body;



