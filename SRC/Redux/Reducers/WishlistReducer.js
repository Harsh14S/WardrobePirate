import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../Actions/Constant';

const initialState = [];

export const wishlistItemHistory = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (action.payload.item.inWishlist) {
        console.log('Already Added to wishlist...');
        return [...state];
      } else {
        action.payload.item.inWishlist = true;
        console.log('Item with ID added: ', action.payload.item.id);
        return [...state, action.payload.item];
      }
    case REMOVE_FROM_WISHLIST:
      console.log('Item with Removed with added: ', action.payload.item.id);
      return state.filter((record) => {
        action.payload.item.inWishlist = false;
        // console.log("record.id: ", record.id);
        // console.log("action.payload.item.id: ", action.payload.item.id);
        return record.id !== action.payload.item.id;
      });
    default:
      return state;
  }
};
