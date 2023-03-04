import { ADD_INTO_CART, ADD_TO_ITEM, EMPTY_CART, MIN_TO_ITEM, REMOVE_FROM_CART } from "./Constant";

export const addIntoCart = (item) => {
  return {
    type: ADD_INTO_CART,
    payload: { item },
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { data },
  };
};

export const itemAdditionCart = (quantity) => {
  return {
    type: ADD_TO_ITEM,
    payload: { quantity },
  }
}

export const itemMinusCart = (quantity) => {
  return {
    type: MIN_TO_ITEM,
    payload: { quantity }
  }
}

export const emptyCartItems = () => {
  return {
    type: EMPTY_CART,
    payload: {},
  }
}
