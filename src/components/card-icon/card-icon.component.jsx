import { useContext } from "react";
import "./card-icon.styles.scss";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container">
      <ShopingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
