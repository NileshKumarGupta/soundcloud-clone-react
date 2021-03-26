import React, { useContext, useState } from "react";
import "react-h5-audio-player/lib/styles.css";

import Header from "./header";
import Banner from "./banner";
import Search from "./search";
import Trending from "./trending";
import Sign from "./sign";
import MusicPlayer from "./musicPlayer";
import { UserContext } from "./userProvider";
// import { ReactAudio } from "reactjs-media";
// import AudioPlayer from "react-h5-audio-player";

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
  const user = useContext(UserContext);

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
