import {
  ADD_INTO_CART,
  ADD_ITEM_INTO_CART,
  EMPTY_CART,
  MIN_ITEM_INTO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from './Constant';

export const addIntoCart = item => {
  return {
    type: ADD_INTO_CART,
    payload: {item},
  };
};

export const removeFromCart = data => {
  return {
    type: REMOVE_FROM_CART,
    payload: {data},
  };
};
// export const addIntoCart = (item, quantity) => {
//   return {
//     type: ADD_INTO_CART,
//     payload: {item, quantity},
//   };
// };

// export const removeFromCart = (data, quantity) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: {data, quantity},
//   };
// };

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

// export const setItemQuantity = quantity => {
//   return {
//     type: SET_ITEM_QUANTITY,
//     payload: {quantity},
//   };
// };

export const emptyCartItems = () => {
  return {
    type: EMPTY_CART,
    payload: {},
  };
};
