import { ADDED_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Actions/Constant";

const initialState = {
  // id: 0,
  index: 0,
  isAdded: false,
}

export const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_TO_WISHLIST:
      return {
        ...state,
        index: action.payLoad,
        isAdded: true,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        index: action.payLoad,
        isAdded: false,
      };
    default:
      return state;
  }
}


// WishListReducer({ type: 'added' });  // returns index and isAdded
