import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../Actions/Constant';

const initialState = [];

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (state.includes(action.payload.item)) {
        return state.filter(record => {
          return record.id !== action.payload.item.id;
        });
      } else {
        return [...state, action.payload.item];
      }

    case REMOVE_FROM_WISHLIST:
      return state.filter(record => {
        return record.id !== action.payload.data.id;
      });

    default:
      return state;
  }
};
