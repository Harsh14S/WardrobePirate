import { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "../Actions/Constant";

const initialState = {
  index: 1,
}

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISHLIST:
      return [...state, action.payLoad];
    case REMOVE_ITEM_FROM_WISHLIST:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payLoad;
      });
      return deleteArray;

    default:
      return state;
  }
}
