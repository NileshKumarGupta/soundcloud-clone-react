import { Button, Input, Modal } from "@material-ui/core";
import React, { useState } from "react";

import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  signInWithFacebook,
} from "../firebase";

import "./signModal.css";

const SignModal = ({ openModal, setOpenModal, signUp = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="signModal"
    >
      <div className="modalContent">
        <Button className="facebookButton" onClick={() => signInWithFacebook()}>
          Continue with Facebook
        </Button>
        <Button className="googleButton" onClick={() => signInWithGoogle()}>
          Continue with Google
        </Button>
        <div className="authMethodSeperator">
          <hr />
          <span className="authSpan">or</span>
          <hr />
        </div>
        <Input
          className="emailInput"
          fullWidth
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          className="passwordInput"
          fullWidth
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          className="continueButton"
          onClick={
            signUp
              ? () => signUpWithEmail(email, password)
              : () => signInWithEmail(email, password)
          }
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default SignModal;
