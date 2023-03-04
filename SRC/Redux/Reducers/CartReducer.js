import {useState} from 'react';
import {
  ADD_INTO_CART,
  ADD_ITEM_INTO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from '../Actions/Constant';

const initialState = [];

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INTO_CART:
      // console.log("action.payload.item: ", action.payload.item);
      // return [...state, action.payload.item];
      if (action.payload.item.quantity >= 10) {
        // console.log('action.payload: ', action.payload);
        // console.log('state: ', state);
        console.log(
          'You can add maximum 10 items and you already have ',
          action.payload.item.quantity,
          ' items in your cart',
        );
        return [...state];
        // } else if (action.payload.item.quantity > 0) {
        //   // action.payload.item.quantity = 1;
        //   // console.log('action.payload: ', action.payload);
        //   // console.log('state: ', state);
        //   // console.log('Item Added with ID: ', action.payload.item.id);
        //   console.log('Items quantity updated to', action.payload.item.quantity);
        //   return [...state];
      } else {
        console.log('Items quantity updated to', action.payload.item.quantity);
        return [...state, action.payload.item];
      }

    case REMOVE_FROM_CART:
      return state.filter(record => {
        console.log('Item Removed with ID: ', action.payload.data.id);
        action.payload.data.quantity = 0;
        return record.id !== action.payload.data.id;
      });

    // case ADD_ITEM_INTO_CART:
    //   return [...state];
    case SET_ITEM_QUANTITY:

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
