import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../Actions/Constant';

const initialState = [];

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (state.includes(action.payload.item)) {
        console.log(
          'Already Added to wishlist with ID: ',
          action.payload.item.id,
        );
        // return [...state];
        return state.filter(record => {
          console.log('Item Removed with ID: ', action.payload.item.id);
          return record.id !== action.payload.item.id;
        });
      } else {
        console.log('Item Added with ID: ', action.payload.item.id);
        return [...state, action.payload.item];
      }

    case REMOVE_FROM_WISHLIST:
      return state.filter(record => {
        console.log('Item Removed with ID: ', action.payload.data.id);
        return record.id !== action.payload.data.id;
      });

    default:
      return state;
  }
};
