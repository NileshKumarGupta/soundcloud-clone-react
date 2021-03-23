import React, { useState } from "react";

import Header from "./header";
import Banner from "./banner";
import Search from "./search";
import Trending from "./trending";
import Sign from "./sign";
import MusicPlayer from "./musicPlayer";
// import { ReactAudio } from "reactjs-media";
// import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./home.css";

/*
Initial Page shown when not signed in

Components
  Header
  Banner?
  Search
  Trending
  SignUp/Signin Action Button
  Media Player
*/

const Home = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Trending setSelectedSong={setSelectedSong} />
      <Sign />
      <MusicPlayer selectedSong={selectedSong} />
    </div>
  );
};

export default Home;
