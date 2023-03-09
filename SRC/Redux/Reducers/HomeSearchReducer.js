import ProductData from '../../ProjectData/ProductsImage/ProductData';
import {SEARCH_ITEM} from '../Actions/Constant';

const initital = [];
export default HomeSearchReducer = (state = initital, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      ProductData.filter(record => {
        if (action.payload.text === record.title) {
          return [...state, record];
        } else {
          return [...state];
        }
        // return action.payload.text === record.title;
        // return
      });
    default:
      return [...state];
  }
};
