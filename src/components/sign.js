import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

import SignModal from "./signModal";

import "./sign.css";

const Sign = () => {
  const [openModalSignUp, setOpenModalSignUp] = useState(false);
  const [openModalSignIn, setOpenModalSignIn] = useState(false);

  return (
    <div className="signDiv">
      <Typography variant="h3">Thanks for listening. Now Join in.</Typography>
      <Typography variant="h6">
        Save tracks, follow artists and build playlists. All for free.
      </Typography>
      <Button
        className="signButton signUpButton"
        onClick={() => setOpenModalSignUp(true)}
      >
        Create Account
      </Button>
      <div className="signInOption">
        <Typography variant="subtitle1">Already Have an account? </Typography>
        <Button
          className="signButton signInButton"
          onClick={() => setOpenModalSignUp(true)}
        >
          Sign In
        </Button>
      </div>
      <SignModal
        openModal={openModalSignIn}
        setOpenModal={setOpenModalSignIn}
      />
      <SignModal
        openModal={openModalSignUp}
        setOpenModal={setOpenModalSignUp}
        signUp
      />
    </div>
  );
};

export default Sign;
