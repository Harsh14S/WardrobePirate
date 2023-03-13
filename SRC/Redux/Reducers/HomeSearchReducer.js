import ProductData from '../../ProjectData/ProductsImage/ProductData';
import { EMPTY_SEARCH, SEARCH_ITEM } from '../Actions/Constant';

const initital = [];
export const HomeSearchReducer = (state = initital, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return ProductData.filter(record => {
        return (action.payload.text).toLowerCase() == (record.title).toLowerCase();
      });

    case EMPTY_SEARCH:
      state = [];
      return [...state]
    default:
      return [...state];
  }
};
