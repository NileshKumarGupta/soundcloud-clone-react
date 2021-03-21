import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

import "./musicCards.css";

const MusicCards = ({ music }) => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia image={music.img} alt={music.alt} className="cardImage" />
          <CardContent style={{ textAlign: "right" }}>
            <Typography variant="h6">{music.title}</Typography>
            <Typography variant="subtitle1">{music.artist}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MusicCards;
