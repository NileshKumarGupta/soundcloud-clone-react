import { Typography } from "@material-ui/core";
import React from "react";

import MusicCards from "./musicCards";

import "./trending.css";
import img from "../assets/banner_image.jpg";

const musicDetails = [
  {
    title: "Memento",
    img,
    alt: "Memento",
    artist: "nonoc",
  },
  {
    title: "Memento",
    img,
    alt: "Memento",
    artist: "nonoc",
  },
  {
    title: "Memento",
    img,
    alt: "Memento",
    artist: "nonoc",
  },
  {
    title: "Memento",
    img,
    alt: "Memento",
    artist: "nonoc",
  },
  {
    title: "Memento",
    img,
    alt: "Memento",
    artist: "nonoc",
  },
];

const Trending = () => {
  return (
    <div style={{ margin: "auto", width: "90%", textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: "40px 0" }}>
        Here's What's Trending Right Now!!
      </Typography>
      <div className="trendingDiv">
        {musicDetails.map((music) => (
          <MusicCards music={music} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
