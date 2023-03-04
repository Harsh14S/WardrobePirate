import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { wishlistReducer } from "./WishlistReducer";

export const RootReducer = combineReducers({
  wish: wishlistReducer,
  cart: CartReducer,
})
