import React, { useState } from "react";

import Header from "./header";
import Banner from "./banner";
import Search from "./search";
import Trending from "./trending";
import Sign from "./sign";
// import { ReactAudio } from "reactjs-media";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import testMedia from "../assets/test_music.mp3";

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
  const [selectedSong, setSelectedSong] = useState({ src: testMedia });

  console.log(selectedSong);

  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Trending setSelectedSong={setSelectedSong} />
      <Sign />
      <div>
        {/* <ReactAudio src={selectedSong.src} /> */}
        <AudioPlayer src={selectedSong.src} />
      </div>
    </div>
  );
};

export default Home;
