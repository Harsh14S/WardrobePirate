import {
  ADD_INTO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from './Constant';

export const addIntoCart = (item, isAdded) => {
  return {
    type: ADD_INTO_CART,
    payload: { item, isAdded },
  };
};

export const removeFromCart = (data) => {
  console.log('data :', data);
  return {
    type: REMOVE_FROM_CART,
    payload: { data },
  };
};

export const setItemQuantity = (item, quantity) => {
  return {
    type: SET_ITEM_QUANTITY,
    payload: { item, quantity },
  };
};

export const emptyCartItems = () => {
  return {
    type: EMPTY_CART,
    payload: {},
  };
};
