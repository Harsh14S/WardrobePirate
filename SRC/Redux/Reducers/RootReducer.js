import { combineReducers } from "redux";
import { Reducers } from "./Reducers";
import { WishListReducer } from "./WishlistReducer";

export const RootReducer = combineReducers({
  Wishlist: WishListReducer,
  Reducer: Reducers,
})
