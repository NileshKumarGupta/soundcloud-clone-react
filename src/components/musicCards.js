import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@material-ui/core";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import React from "react";

import "./musicCards.css";

const MusicCards = ({ music, setSelectedSong }) => {
  return (
    <React.Fragment>
      <Card className="musicCard" onClick={() => setSelectedSong(music)}>
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
