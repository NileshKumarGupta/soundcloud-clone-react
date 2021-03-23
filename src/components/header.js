import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import React from "react";

import { signInWithGoogle } from "../firebase";

import UserProvider from "./userProvider";
import SignModal from "./signModal";

import "./header.css";

/*
Ideally on clicking, opens up a modal 
and shows all options there
*/

const Header = () => {
  return (
    <AppBar position="static" className="topBar">
      <Toolbar>
        <IconButton edge="start" className="soundCloudIcon" aria-label="menu">
          <CloudIcon />
        </IconButton>
        <Typography variant="h6">SOUNDCLOUD</Typography>
        <Button className="topBarButton signInButton">Sign In</Button>
        <UserProvider>
          <Button
            className="topBarButton signUpButton"
            onClick={() => signInWithGoogle()}
          >
            Create Account
          </Button>
          <SignModal />
        </UserProvider>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
