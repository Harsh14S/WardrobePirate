import {createStore} from 'redux';
import {RootReducer} from '../Reducers/RootReducer';

export const MyStore = createStore(RootReducer);
