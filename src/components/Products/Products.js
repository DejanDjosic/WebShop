import React, { useState } from "react";
import Product from "./Product";
import classes from "./Products.module.css";


const Products = (props) => {
  const [details, setDetails] = useState(false);
  
  props.items.forEach((element) => {
    element.description = `${element.description.slice(0, 100)}...`;
    if (element.name.length > 47)
      element.name = `${element.name.slice(0, 47)}...`;
  });

  return (
    <div className={classes.Products_grid__3uY1j}>
      {props.items.map((product) => (
        <div key={product.id} className={classes.Product_item__342sG}>
          <div className={classes.Product_image_wrapper_IYyRO}>
            <img
              src={product.image}
              alt={product.name}
              className={classes.Product_image__3U4Td}
            />
          </div>
          <div className={classes.Product_info__2u1rw}>
            <div className={classes.Product_title__21bFz}>
              <h3>{product.name}</h3>
            </div>
            <div className={classes.Product_desc__yDphz}>
              {product.description}
            </div>
          </div>
          <div className={classes.parent}>
          <div onClick={() => setDetails(true)}>More →</div>
          </div>
          {details && <Product props={props} />}
        </div>
      ))}
    </div>
  );
};

export default Products;
