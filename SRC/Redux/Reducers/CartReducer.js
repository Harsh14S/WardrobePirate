import {
  ADD_INTO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from '../Actions/Constant';

const initialState = [];
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INTO_CART:
      if (action.payload.isAdded) {
        // action.payload.isAdded = false;
        return [...state];
      } else {
        return [...state, action.payload.item];
      }

    case REMOVE_FROM_CART:
      return state.filter(record => {
        // action.payload.isAdded = false;
        console.log('Item Removed with ID: ', action.payload.data.id);
        action.payload.data.quantity = 0;
        action.payload.quantity = 0;
        // action.payload.isAdded = false;
        return record.id !== action.payload.data.id;
      });

    case SET_ITEM_QUANTITY:
      action.payload.item.quantity = action.payload.quantity;
      return [...state];
    // return [action.payload.item];

    case EMPTY_CART:
      state.map(item => {
        item.quantity = 0;
      });
      state = [];
      return [...state];
    default:
      return state;
  }
};
