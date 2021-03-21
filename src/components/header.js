import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import React from "react";

import "./header.css";

const Header = () => {
  return (
    <AppBar position="static" className="topBar">
      <Toolbar>
        <IconButton edge="start" className="soundCloudIcon" aria-label="menu">
          <CloudIcon />
        </IconButton>
        <Typography variant="h6">SOUNDCLOUD</Typography>
        <Button className="topBarButton signInButton">Sign In</Button>
        <Button className="topBarButton signUpButton">Create Account</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
