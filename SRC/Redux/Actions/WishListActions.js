import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './Constant';

// addToWishlist Action will get the details of item that is to be added to wishlist
export const addToWishlist = item => {
  // console.log('ACTION -> ID: ' + id);
  return {
    type: ADD_TO_WISHLIST,
    payload: {item},
  };
};
export const removeFromWishlist = item => {
  // console.log("Remove id:", id);
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: {item},
  };
};
