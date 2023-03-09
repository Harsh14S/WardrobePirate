import {SEARCH_ITEM} from './Constant';

export const searchItem = text => {
  return {
    type: SEARCH_ITEM,
    payload: {text},
  };
};
