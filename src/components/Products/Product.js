import React from "react";
import classes from "./ProductModal.module.css";
import ReactDOM from "react-dom";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Content = (props) => {

const fixedPrice=`$${props.price.toFixed(2)}`;



  return (
    <div className={classes.modal}>
      <div className={classes.Details_details__1dx8S}>
        <div className={classes.Details_img__3Dm5r}>
        <img src={props.img} alt={props.name}  />
        </div>
        <div>
        <Button function={props.closeModal} text="Go back" icon="←" ></Button>
          <h1 className={classes.Details_title__3_I8v}>{props.name} </h1>
          <div className={classes.Details_price__2BFe6}>{fixedPrice}</div>
          <div className={classes.Details_desc__24Gs1}>
            {props.description}
          </div>
          <div className={classes.Details_buttons__2WlM2}>
            <Button text="Add to Cart" icon="+" />

            <Button text="Remove from Cart" icon="☠" />
          </div>
          <div className={classes.Details_amount__1iKfJ}>
            Amount:
            <span className={`${classes.Details_amount_value__2VKAn}`}>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Content
          name={props.name}
          img={props.image}
          id={props.id}
          description={props.description}
          closeModal={props.closeModal}
          price={props.price}
        />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Product;
