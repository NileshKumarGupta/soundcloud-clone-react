import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React, { useEffect, useState } from "react";

import { storage } from "../firebase";

import "./musicCards.css";

const MusicCards = ({ music, setSelectedSong }) => {
  const [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    const storageRef = storage.ref();
    const musicRef = storageRef.child(`Music/${music.name}.mp3`);
    musicRef.getDownloadURL().then((url) => setMusicUrl(url));
  }, [music.name]);

  return (
    <React.Fragment>
      <Card
        className="musicCard"
        onClick={() => setSelectedSong({ music, musicUrl })}
      >
        <CardActionArea>
          <CardMedia image={music.image} alt={music.alt} className="cardImage">
            <Tooltip title="Play">
              <PlayCircleOutlineIcon className="musicCardIcon hide" />
            </Tooltip>
          </CardMedia>
          <CardContent style={{ textAlign: "right" }}>
            <Typography variant="h6">{music.name}</Typography>
            <Typography variant="subtitle1">{music.artist}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default MusicCards;
