import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import MusicCards from "./musicCards";
import { db } from "../firebase";

import "./trending.css";

const Trending = () => {
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
    <div style={{ margin: "auto", width: "90%", textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: "40px 0" }}>
        Here's What's Trending Right Now!!
      </Typography>
      <div className="trendingDiv">
        {trendingSongs.map((music) => (
          <MusicCards music={music.data} id={music.docId} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
