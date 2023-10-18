import React, { useState, useEffect, useContext } from "react";
import classes from "./ProductModal.module.css";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Context from "../Store/context";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Content = (props) => {
  const [amount, setAmount] = useState(0);
  const fixedPrice = `$${props.price.toFixed(2)}`;

  const ctx = useContext(Context);

  useEffect(() => {
    ctx.items.forEach((element) => {
      if (element.id === props.id) setAmount(element.amount);
    });
  }, [ctx.items, props.id]);

  const addToCartHandler = () => {
    const incrasedAmount = +amount + 1;
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: incrasedAmount,
      price: props.price,
      category: props.category,
      description: props.description,
      image: props.img,
    });
    setAmount(incrasedAmount);
  };

  const removeCartItemHandler = (id) => {
    if (amount > 0) {
      const decreasedAmount = +amount - 1;
      ctx.removeItem(id);
      setAmount(decreasedAmount);
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.Details_details__1dx8S}>
        <div className={classes.Details_img__3Dm5r}>
          <img height="100" width="100" src={props.img} alt={props.name} />
        </div>
        <div>
          <Button function={props.closeModal} text="Go back" icon="←"></Button>
          <h1 className={classes.Details_title__3_I8v}>{props.name} </h1>
          <div className={classes.Details_price__2BFe6}>{fixedPrice}</div>
          <div className={classes.Details_desc__24Gs1}>{props.description}</div>
          <div className={classes.Details_buttons__2WlM2}>
            <Button function={addToCartHandler} text="Add to Cart" icon="+" />

            <Button
              function={() => removeCartItemHandler(props.id)}
              text="Remove from Cart"
              icon="☠"
            />
          </div>
          <div className={classes.Details_amount__1iKfJ}>
            Amount:
            <span>{amount}</span>
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
          category={props.category}
        />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Product;
