import React from "react";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  const categoryChangeHandler = (category) => {
    console.log(category);
  };
  return (
    <div className={classes.Categories_optionbar__1zY3C}>
      {props.categories.map((category) => {
        return (
          <div key={category.id}
            className={classes.Categories_item__2Vyh8}
            onClick={()=>{categoryChangeHandler(category)}}
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
