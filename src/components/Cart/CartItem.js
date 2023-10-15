import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import classes from "./CartItem.module.css";
import Context from "../Store/context";
import Product from "../Products/Product";
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

const CartItem = (props) => {
  const [selectedProductId, setSelectedProductId] = useState(null);


  const modifiedName = props.name.slice(0, 47) + (props.name.length > 47 ? "..." : "");
  const modifiedDescription = props.description.slice(0, 100) + (props.description.length > 100 ? "..." : "");

  const switchModal = (productId) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };
  const ctx = useContext(Context);

  const removeCartItemHandler = (id) => {
    ctx.removeItem(id);
  };


  return (
    <div className={classes.CartItem_item__grD0L}>
      
      <div
        onClick={() => switchModal(props.id)}
        className={classes.CartItem_image_wrapper__1JP1z}
      >
        <img
          src={props.image}
          alt={props.name}
          className={classes.CartItem_image__DnX_6}
        />
      </div>
      <div>
        <CustomLink
          className={classes.CartItem_category__5ZGv}
         
          to="/"
          onClick={()=>props.onCategoryChange(props.category)}
        >
          {props.category}
        </CustomLink>
        <div
          onClick={() => switchModal(props.id)}
          className={classes.CartItem_title__LO4Zm}
        >
          {modifiedName}
        </div>

        <div>{modifiedDescription}</div>
      </div>
      <div className={classes.CartItem_actions__2qwso}>
        <div className={classes.CartItem_price__3u5o_}>
          Amount: {props.amount}
        </div>
        <div className={classes.CartItem_price__3u5o_}>${props.price}</div>
        <Button
          function={() => removeCartItemHandler(props.id)}
          text="Remove from Cart"
          icon="☠"
        />
      </div>
      {selectedProductId === props.id && (
        <Product
          closeModal={closeModal}
          name={props.name}
          image={props.image}
          id={props.id}
          description={props.description}
          price={props.price}
          category={props.category}
        />
      )}
    </div>
  );
};

export default CartItem;
