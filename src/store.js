import { legacy_createStore } from "redux";
import shopReducer from "./Reducers";

const store = legacy_createStore(shopReducer);

export default store;