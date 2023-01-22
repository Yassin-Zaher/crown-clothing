import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  priceCount: 0,
  setPriceCount: () => {},
});

const totalPriceCount = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return totalPrice;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newPriceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setItemCount(newItemCount);
    setPriceCount(newPriceCount);
  }, [cartItems]);

  //onClick={removeItemHandler} onClick={addItemHandler}  onClick={clearItemHandler}
  const removeItemToCart = (product) => {
    if (product.quantity === 0) return;
    const updatedProduct = cartItems.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setCartItems(updatedProduct);
  };

  const clearItemFromCart = (product) => {
    const updatedProducts = cartItems.filter((p) => p.id !== product.id);
    setCartItems(updatedProducts);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    itemCount,
    removeItemToCart,
    clearItemFromCart,
    priceCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
