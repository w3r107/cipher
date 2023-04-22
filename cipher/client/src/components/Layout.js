import React, { useEffect } from "react";
import { UserContext } from "../UserContext";
import NavigationHor from "./NavigationHor";
import Aboutme from "./Pages/Aboutme";
import Banner from "./Pages/Banner";
import Heatmap from "./Pages/Heatmap";
import OnWeb from "./Pages/OnWeb";
import Password from "./Pages/Password";
import Prof from "./Pages/Prof";

const Layout = () => {
  return (
    <>
      <NavigationHor />
      <Banner />
      <Aboutme />
      <Heatmap />
      <OnWeb />
      <Prof />
      <Password />
    </>
  );
};

export default Layout;
