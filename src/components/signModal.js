import { Button, Input, Modal } from "@material-ui/core";
import React, { useState } from "react";

import "./signModal.css";

const SignModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="signModal"
    >
      <div className="modalContent">
        <Button className="facebookButton">Continue with Facebook</Button>
        <Button className="googleButton">Continue with Google</Button>
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
        />
        <Input
          className="passwordInput"
          fullWidth
          placeholder="Password"
          type="password"
        />
        <Button className="continueButton">Continue</Button>
      </div>
    </Modal>
  );
};

export default SignModal;
