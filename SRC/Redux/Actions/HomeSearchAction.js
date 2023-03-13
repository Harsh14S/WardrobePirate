import { EMPTY_SEARCH, SEARCH_ITEM } from './Constant';

export const searchItem = text => {
  return {
    type: SEARCH_ITEM,
    payload: { text },
  };
};
export const emptySearchItem = () => {
  return {
    type: EMPTY_SEARCH,
    payload: {},
  };
};

