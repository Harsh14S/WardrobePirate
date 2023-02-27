import { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from './Constant'

export const addItemToWishlist = (data) => ({
  type: ADD_ITEM_TO_WISHLIST,
  payLoad: data,
});
export const removeItemFromWishlist = (index) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  payLoad: index,
});


