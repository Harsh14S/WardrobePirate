import {
  ADD_INTO_CART,
  ADD_ITEM_INTO_CART,
  EMPTY_CART,
  MIN_ITEM_INTO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from './Constant';

// export const addIntoCart = (item, q) => {
//   return {
//     type: ADD_INTO_CART,
//     payload: {item},
//   };
// };

// export const removeFromCart = data => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: {data},
//   };
// };
export const addIntoCart = (item, quantity, isAdded) => {
  return {
    type: ADD_INTO_CART,
    payload: {item, quantity, isAdded},
  };
};

export const removeFromCart = (data, quantity, isAdded) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {data, quantity, isAdded},
  };
};

// export const itemAdditionCart = quantity => {
//   return {
//     type: ADD_ITEM_INTO_CART,
//     payload: {quantity},
//   };
// };

// export const itemMinusCart = quantity => {
//   return {
//     type: MIN_ITEM_INTO_CART,
//     payload: {quantity},
//   };
// };

export const setItemQuantity = (item, quantity) => {
  return {
    type: SET_ITEM_QUANTITY,
    payload: {item, quantity},
  };
};

export const emptyCartItems = () => {
  return {
    type: EMPTY_CART,
    payload: {},
  };
};
