import {
  ADD_INTO_CART,
  BILL_COUNTER,
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

// export const billCounter = (item, quantity, total) => {
//   return {
//     type: BILL_COUNTER,
//     payload: { item, quantity, total }
//   }
// }

export const emptyCartItems = () => {
  return {
    type: EMPTY_CART,
    payload: {},
  };
};
