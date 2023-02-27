import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../Actions/Constant";


export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payLoad]
    case REMOVE_ITEM_FROM_CART:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payLoad;
      });
      return deleteArray;

    default:
      return state;
  }
}
