import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalContent = (props) => {
  const errorClosingHandler = () => props.closeError();

  const modalButton = (
    <button className={classes.button} onClick={errorClosingHandler}>
      Okay
    </button>
  );

  let heading;
  let success = false;
  if (props.message.includes("success")) {
    heading = "Success!";
    success = true;
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
              {success ? (
                <CustomLink to="/">
                  {modalButton}
                </CustomLink>
              ) : (
                <div>
                {modalButton}
                </div>
              )}
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
      {ReactDOM.createPortal(
        <ModalContent message={props.message} closeError={props.closeError} />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
