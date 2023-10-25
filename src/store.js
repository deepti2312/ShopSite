import shopReducer from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { shop: shopReducer }
})
export default store;