import { Button, Typography } from "@material-ui/core";
import React from "react";

import "./banner.css";

const Banner = () => {
  return (
    <div className="bannerDiv">
      <div className="textDiv">
        <Typography variant="h2">Connet On SoundCloud</Typography>
        <Typography variant="h6">
          Discover, stream, and share a constantly expanding mix of music from
          emerging and major artists around the world.{" "}
        </Typography>
        <Button className="bannerSignUpButton">Sign Up for free</Button>
      </div>
    </div>
  );
};

export default Banner;
