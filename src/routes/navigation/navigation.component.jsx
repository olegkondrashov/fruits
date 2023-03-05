import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

import { Logo, NavigationContainer } from "./navigation.styles";

const Navigation = () => {
    const {isCartOpen} = useContext(CartContext);
    
    return (
        <Fragment>
            <NavigationContainer>
                <Link to="/">
                    <Logo/>
                </Link>
                <Link to='/shop'>
                    SHOP
                </Link>
                <CartIcon/>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;