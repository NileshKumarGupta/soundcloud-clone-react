import { Button, Input, Modal } from "@material-ui/core";
import React, { useState } from "react";

import "./signModal.css";

const SignModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="signModal"
    >
      <div className="modalContent">
        <Button>Continue with Facebook</Button>
        <Button>Continue with Google</Button>
        <div className="authMethodSeperator">
          <div></div>
          <span className="authSpan">or</span>
          <div></div>
        </div>
        <Input className="emailInput" />
        <Input className="passwordInput" />
        <Button>Continue</Button>
      </div>
    </Modal>
  );
};

export default SignModal;
