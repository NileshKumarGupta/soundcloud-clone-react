import { Typography } from "@material-ui/core";
import React from "react";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import "./musicPlayer.css";

const MusicPlayer = ({ selectedSong }) => {
  const onNext = () => {
    console.log("Next Button Pressed");
  };

  const onPrevious = () => {
    console.log("Previous Button Pressed");
  };

  return (
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
          <div className="musicDetails">
            <img src={selectedSong.music.image} alt={selectedSong.music.alt} />
            <div className="musicText">
              <Typography variant="h5">{selectedSong.music.name}</Typography>
              <Typography variant="subtitle1">
                {selectedSong.music.artist}
              </Typography>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MusicPlayer;
