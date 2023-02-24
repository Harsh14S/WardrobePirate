import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/Constants'

const addItemToCart = (data) => ({
  type: ADD_TO_CART,
  payLoad: data,
});
const removeItemFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payLoad: index,
});

export { addItemToCart, removeItemFromCart };
