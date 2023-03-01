import {combineReducers} from 'redux';
import {wishlistItemHistory} from './WishlistReducer';

export const RootReducer = combineReducers({
  wish: wishlistItemHistory,
});
