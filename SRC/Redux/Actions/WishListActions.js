import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './Constant';

// addToWishlist Action will get the details of item that is to be added to wishlist
export const addToWishlist = (item) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: { item },
  };
};
export const removeFromWishlist = (data) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: { data },
  };
};
