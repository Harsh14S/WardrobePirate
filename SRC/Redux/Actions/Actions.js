import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './Constant'

export const addItemToCart = (data) => ({
  type: ADD_ITEM_TO_CART,
  payLoad: data,
});
export const removeItemFromCart = (index) => ({
  type: REMOVE_ITEM_FROM_CART,
  payLoad: index,
});


