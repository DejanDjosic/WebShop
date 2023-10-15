import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Context from "../Store/context";
import Button from "../UI/Button";

const Cart = (props) => {
  const ctx = useContext(Context);

  const fixedTotalAmount = `${ctx.totalAmount.toFixed(2)}`;

  
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
            <Button text="Checkout" icon="➵" function={ctx.emptyCart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
