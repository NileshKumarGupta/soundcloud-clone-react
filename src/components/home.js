import React from "react";

import Header from "./header";
import Banner from "./banner";
import Search from "./search";
import Trending from "./trending";
import Sign from "./sign";

/*
Initial Page shown when not signed in

Components
  Header
  Banner?
  Search
  Trending
  SignUp/Signin Action Button
*/

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Trending />
      <Sign />
    </div>
  );
};

export default Home;
