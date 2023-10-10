import React from "react";
import classes from "./ProductModal.module.css";
import Button from "../UI/Button";

const ProductModal = () => {
  return (
    <div>
      <div className={classes.Details_details__1dx8S}>
        <img
          src="./assets/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          className={classes.Details_img__3Dm5r}
        />
        <div>
          <h1 className={classes.Details_title__3_I8v}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <div className={classes.Details_price__2BFe6}>$ 109.95</div>
          <div className={classes.Details_desc__24Gs1}>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </div>
          <div className={classes.Details_buttons__2WlM2}>
            <button className={classes.Button_btn__1N_e1} type="button">
              Add to Cart
              <span style="font-size: 24px; margin-left: 8px">+</span>
            </button>{" "}
            <Button text="Remove from Cart" icon="☠" />
          </div>
          <div className={classes.Details_amount__1iKfJ}>
            Amount:{" "}
            <span className={classes.Details_amount - value__2VKAn}>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
