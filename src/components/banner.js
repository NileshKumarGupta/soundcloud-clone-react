import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

import SignModal from "./signModal";

import "./banner.css";

const Banner = () => {
  const [openModalSignUp, setOpenModalSignUp] = useState(false);

  return (
    <div className="bannerDiv">
      <div className="textDiv">
        <Typography variant="h2">Connet On SoundCloud</Typography>
        <Typography variant="h6">
          Discover, stream, and share a constantly expanding mix of music from
          emerging and major artists around the world.{" "}
        </Typography>
        <Button
          className="bannerSignUpButton"
          onClick={() => setOpenModalSignUp(true)}
        >
          Sign Up for free
        </Button>
        <SignModal
          openModal={openModalSignUp}
          setOpenModal={setOpenModalSignUp}
          signUp
        />
      </div>
    </div>
  );
};

export default Banner;
