import { SEARCH_ITEM } from './Constant';

export const searchItem = text => {
  console.log(text, 'action text');
  return {
    type: SEARCH_ITEM,
    payload: { text },
  };
};
