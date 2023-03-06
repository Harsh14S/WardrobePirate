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
      console.log("isAdded: ", action.payload.isAdded);
      if (action.payload.isAdded) {
        action.payload.item.quantity = action.payload.quantity;
        return [...state, action.payload.item]
      } else {
        action.payload.item.quantity = action.payload.quantity;
        return [...state];
      }

    case REMOVE_FROM_CART:
      return state.filter(record => {
        console.log("Record.quantity: ", record.id);
        console.log("action.payload.data.quantity: ", action.payload.data.id);
        action.payload.data.quantity = 0;
        // ("",action.payload.isAdded)
        return record.id !== action.payload.data.id;
      })
    // console.log("State returned: ", state);
    // return [...state]

    case SET_ITEM_QUANTITY:
      action.payload.item.quantity = action.payload.quantity;
      return [...state];
    // return [action.payload.item];

    case EMPTY_CART:
      state.map(item => {
        // item.quantity = 0;
        console.log('item:', item);
        item.quantity = 0;
      });
      state = [];
      return [...state];
    default:
      return state;
  }
};
