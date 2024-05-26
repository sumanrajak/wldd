import {  useEffect, useState } from "react";
import { Modal, Toggle, Button, ButtonToolbar, Placeholder } from "rsuite";
import { Panel } from "rsuite";

const EmailModal = ({ open, handleClose, email }) => {

  
  return (
    <Modal overflow={true} open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>{email.senderName} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       

        <Panel header={email.subject}>
         <p><small>from : {email.email} </small></p>
         <small>{email.date}</small>
          <p>
            {email.content}
          </p>
        </Panel>
     
        
      </Modal.Body>
      <Modal.Footer>
        <Button
          appearance="primary"
        >
          reply
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EmailModal;
