import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/Constants'

export default Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payLoad]

    case REMOVE_FROM_CART:
      return (state.filter((item, index) => {
        return index !== action.payload;
      }))
    default:
      return state;
  }
}
