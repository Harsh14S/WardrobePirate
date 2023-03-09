import {combineReducers} from 'redux';
import {CartReducer} from './CartReducer';
import HomeSearchReducer from './HomeSearchReducer';
import {wishlistReducer} from './WishlistReducer';

export const RootReducer = combineReducers({
  wish: wishlistReducer,
  cart: CartReducer,
  homeSearch: HomeSearchReducer,
});
