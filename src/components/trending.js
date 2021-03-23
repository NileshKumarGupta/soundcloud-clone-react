import { Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import MusicCards from "./musicCards";
import { db } from "../firebase";

import "./trending.css";

const Trending = ({ setSelectedSong }) => {
  const [trendingSongs, setTrendingSongs] = useState([]);

  useEffect(() => {
    // need to order by first 8 views

    db.collection("Music")
      .get()
      .then((querySnapshot) => {
        setTrendingSongs(
          querySnapshot.docs.map((doc) => {
            return { data: doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  return (
    <div className="trendingContainer">
      <Typography variant="h4" className="trendingText">
        Here's What's Trending Right Now!!
      </Typography>
      <div className="trendingDiv">
        {trendingSongs.map((music) => (
          <MusicCards
            music={music.data}
            key={music.id}
            setSelectedSong={setSelectedSong}
          />
        ))}
      </div>
      <Button className="exploreTrendingButton">
        Explore Trending Playlist
      </Button>
    </div>
  );
};

export default Trending;
