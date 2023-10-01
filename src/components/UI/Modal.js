import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalContent = (props) => {
    const errorClosingHandler = () => props.closeError();

    let heading;
    if (props.message.includes("success")) {
      heading = "Success!";
    } else {
      heading = "Invalid input!";
    }
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.modal}>
          <div className={classes.content}>
            <header className={classes.header}>
              <h2>{heading}</h2>
            </header>
            <div className={classes.content}>{props.message} </div>
            <footer className={classes.actions}>
              <button className={classes.button} onClick={errorClosingHandler}>
                Okay
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {


  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalContent message={props.message} closeError={props.closeError} />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
