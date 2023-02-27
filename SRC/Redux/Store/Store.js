import { createStore } from "redux";
import { Reducers } from "../Reducers/Reducers";
import { RootReducer } from "../Reducers/RootReducer";


export const MyStore = createStore(Reducers);
