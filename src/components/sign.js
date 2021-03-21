import { Button, Typography } from "@material-ui/core";
import React from "react";

import "./sign.css";

const Sign = () => {
  return (
    <div className="signDiv">
      <Typography variant="h3">Thanks for listening. Now Join in.</Typography>
      <Typography variant="h6">
        Save tracks, follow artists and build playlists. All for free.
      </Typography>
      <Button className="signButton signUpButton">Create Account</Button>
      <div className="signInOption">
        <Typography variant="subtitle1">Already Have an account? </Typography>
        <Button className="signButton signInButton">Sign In</Button>
      </div>
    </div>
  );
};

export default Sign;
