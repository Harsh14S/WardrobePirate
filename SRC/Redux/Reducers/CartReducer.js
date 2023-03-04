import { ADD_INTO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../Actions/Constant";

const initialState = [];

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_INTO_CART:
      // console.log("action.payload.item: ", action.payload.item);
      // return [...state, action.payload.item];
      if (action.payload.item.quantity === 1) {
        console.log("Already Added to wishlist with ID: ", action.payload.item.id);
        return [...state];
      } else {
        action.payload.item.quantity = 1;
        console.log("Item Added with ID: ", action.payload.item.id);
        return [...state, action.payload.item];
      }

    case REMOVE_FROM_CART:
      return state.filter((record) => {
        console.log("Item Removed with ID: ", action.payload.data.id);
        action.payload.data.quantity = 0;
        return record.id !== action.payload.data.id;
      });

    case EMPTY_CART:
      state.map((item, index) => {
        item.quantity = 0;
      })

      state = [];
      return [...state];
    default:
      return state;
  }
}
