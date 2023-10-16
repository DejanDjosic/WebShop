import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Context from "../Store/context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import LoginContext from "../Store/LoginContext";
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

const Cart = (props) => {
  const [modalMsg, setModalMsg] = useState("");
  const ctx = useContext(Context);
  const Lctx = useContext(LoginContext);
  const fixedTotalAmount = `${ctx.totalAmount.toFixed(2)}`;

  const submitHandler = () => {
      if (Lctx.isLoggedIn) {
        ctx.emptyCart();
        setModalMsg("Purchase successful! Thank you for shopping with us!");
      }
  };

  const exitError = () => setModalMsg("");

  const checkoutButton = () => {
    if (Lctx.isLoggedIn)
      return <Button text="Checkout" icon="➵" function={submitHandler} />
    else return(
    <CustomLink to="/checkout">
      <Button text="Checkout" icon="➵" function={submitHandler} />
    </CustomLink>)
  };

  return (
    <div className={classes.Cart_cart__2pudL}>
      {ctx.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {ctx.items.map((item) => {
            return (
              <CartItem
                id={item.id}
                key={item.id}
                name={item.name}
                description={item.description}
                category={item.category}
                price={item.price}
                image={item.image}
                amount={item.amount}
                onCategoryChange={props.onCategoryChange}
              />
            );
          })}
          <div className={classes.Cart_footer__34_Wn}>
            <div>
              Total:
              <span className={classes.Cart_total_value__jkjnM}>
                ${fixedTotalAmount}
              </span>
            </div>

            {checkoutButton()}
          </div>
        </div>
      )}
      {modalMsg && <Modal message={modalMsg} closeError={exitError} />}
    </div>
  );
};

export default Cart;
