import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

import "./musicCards.css";

const MusicCards = ({ music, id }) => {
  return (
    <React.Fragment key={id}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={music.image}
            alt={music.alt}
            className="cardImage"
          />
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
