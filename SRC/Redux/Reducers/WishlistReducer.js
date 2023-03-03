import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Actions/Constant"

const initialState = []

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (action.payload.item.inWishlist) {
        console.log("Already Added to wishlist with ID: ", action.payload.item.id);
        return [...state];
      } else {
        action.payload.item.inWishlist = true;
        console.log("Item Added with ID: ", action.payload.item.id);
        return [...state, action.payload.item];
      }
    case REMOVE_FROM_WISHLIST:
      return state.filter((record) => {
        console.log("Item Removed with ID: ", action.payload.data.id);
        action.payload.data.inWishlist = false;
        return record.id !== action.payload.data.id;
      });
    default:
      return state;
  }
}
