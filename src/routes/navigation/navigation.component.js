import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import {
  NavLink,
  NavLinks,
  NavigationContainer,
  LogoContainer,
} from "./navigation.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as SiteLogo } from "../../assets/fashion.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          {/* <h4 className="logo">FASHIONKART</h4> */}
          <SiteLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : ""}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
