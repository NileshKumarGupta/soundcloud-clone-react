import React, { useState } from "react";

import Header from "./header";
import Banner from "./banner";
import Search from "./search";
import Trending from "./trending";
import Sign from "./sign";
// import { ReactAudio } from "reactjs-media";
import AudioPlayer from "react-h5-audio-player";
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

  const onNext = () => {
    console.log("Next Button Pressed");
  };

  const onPrevious = () => {
    console.log("Previous Button Pressed");
  };

  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Trending setSelectedSong={setSelectedSong} />
      <Sign />
      <div className="footerMediaPlayer">
        {selectedSong ? (
          <div className="playerContainer">
            <AudioPlayer
              className="mediaPlayer"
              src={selectedSong.musicUrl}
              autoPlay={true}
              onClickNext={onNext()}
              onClickPrevious={onPrevious()}
            />
            <div>{selectedSong.music.name}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
