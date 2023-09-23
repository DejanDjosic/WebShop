import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import loginSvg from "../../assets/log-in.svg";
import logoutSvg from "../../assets/log-out.svg";
import userSvg from "../../assets/user-plus.svg";
import cartSvg from "../../assets/cart.svg";
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



const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.Header_header__182Qc}>
          <div className={classes.Header_container__3BetX}>
            <CustomLink
              className={classes.Header_logo__2NvDa}
              to="/"
            >
              <img src={logo} alt="Levi9" />
              <div className={classes.Header_shop__2h9R9}>shop</div>
            </CustomLink>
            <div className={classes.Header_user_actions__2JBmd}>
              <CustomLink
                className={classes.Header_route__2PgnE}
                to="/Login"
              >
                Login
                <img
                  src={loginSvg}
                  alt="Login"
                  className={classes.Header_icon__2S3Ks}
                />
              </CustomLink>
              <CustomLink
                className={classes.Header_route__2PgnE}
                to="./register"
              >
                Register
                <img
                  src={userSvg}
                  alt="Register"
                  className={classes.Header_icon__2S3Ks}
                />
              </CustomLink>
              <CustomLink
                className={classes.CartHeader_cart__1o7mb}
                to="./cart"
              >
                <img
                  src={cartSvg}
                  alt="Cart"
                  className={classes.CartHeader_icon__a4zZI}
                />
                <div className={classes.CartHeader_count__j8Uih}>0</div>
              </CustomLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
