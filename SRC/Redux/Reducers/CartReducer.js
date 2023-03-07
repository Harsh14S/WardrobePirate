import {
  ADD_INTO_CART,
  BILL_COUNTER,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from '../Actions/Constant';

const initialState = [];

export const CartReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_INTO_CART:
      console.log("isAdded: ", action.payload.isAdded);
      // console.log("action.payload: ", action.payload);
      if (action.payload.isAdded) {
        // console.log("action.payload: ", action.payload);
        if (state.includes(action.payload.item)) {
          return [...state];
        } else {
          // console.log('action.payload: ', action.payload);
          return [...state, action.payload.item];
        }
      } else {
        return [...state];
      }

    case REMOVE_FROM_CART:
      return state.filter(record => {
        // console.log("Record.quantity: ", record.id);
        // console.log("action.payload.data.quantity: ", action.payload.data.id);
        action.payload.data.quantity = 1;
        return record.id !== action.payload.data.id;
      })

    case SET_ITEM_QUANTITY:
      action.payload.item.quantity = action.payload.quantity;
      // console.log('action.payload: ', action.payload);
      return [...state];

    case BILL_COUNTER:
    // action.payload.price = 1;
    // console.log("action.payload.price", action.payload.price)
    // console.log("action.payload: ", action.payload);
    // return action.payload;

    case EMPTY_CART:
      state.map(item => {
        item.quantity = 1;
      });
      state = [];
      return [...state];
    default:
      return state;
  }
};
