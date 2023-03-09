import ProductData from '../../ProjectData/ProductsImage/ProductData';
import { SEARCH_ITEM } from '../Actions/Constant';

const initital = [];
export default HomeSearchReducer = (state = initital, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return ProductData.filter(record => {
        if ((action.payload.text).toLowerCase() == (record.title).toLowerCase()) {
          console.log("Matched.....");
          return [...state, record];
        }
      });
    default:
      return [...state];
  }
};
