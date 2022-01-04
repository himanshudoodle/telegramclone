import React from "react";
import { Alert } from "react-bootstrap";
import Styles from "./Chatbox.module.css";

function Chatbox() {
  return (
    <div className={Styles.Chatbox}>
      <Alert className={Styles.alert} variant="secondary">
        Select a chat to start messaging!
      </Alert>
    </div>
  );
}

export default Chatbox;
