import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import React, { useState } from "react";

import SignModal from "./signModal";

import "./header.css";

/*
Ideally on clicking, opens up a modal 
and shows all options there
*/

const Header = () => {
  const [openModalSignIn, setOpenModalSignIn] = useState(false);
  const [openModalSignUp, setOpenModalSignUp] = useState(false);

  return (
    <AppBar position="static" className="topBar">
      <Toolbar>
        <IconButton edge="start" className="soundCloudIcon" aria-label="menu">
          <CloudIcon />
        </IconButton>
        <Typography variant="h6">SOUNDCLOUD</Typography>
        <Button
          className="topBarButton signInButton"
          onClick={() => setOpenModalSignIn(true)}
        >
          Sign In
        </Button>
        <Button
          className="topBarButton signUpButton"
          onClick={() => setOpenModalSignUp(true)}
        >
          Create Account
        </Button>
        <SignModal
          openModal={openModalSignIn}
          setOpenModal={setOpenModalSignIn}
        />
        <SignModal
          openModal={openModalSignUp}
          setOpenModal={setOpenModalSignUp}
          signUp
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
