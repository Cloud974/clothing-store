import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container nav-links-left">
          <Link className="logo-container" to='/'>
            <Logo className="logo" />
          </Link>
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {/* add links to categories? */}
        </div>
        <div className="nav-links-container nav-links-right">
          {!currentUser ?
            <Link className="nav-link" to='/auth'>SIGN IN</Link> :
            <Link className="nav-link" onClick={signOutUser}>SIGN OUT</Link>
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation