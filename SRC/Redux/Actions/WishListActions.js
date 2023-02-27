import { ADDED_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./Constant"

export const addToWishList = (data) => {
  return {
    type: ADDED_TO_WISHLIST,
    payLoad: data,
  };
};

export const removeFromWishList = (data) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payLoad: data,
  };
};
