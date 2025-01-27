import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice"
import productReducer from "../Features/ProductSlice"
import cartReducer from "../Features/CartSlice"

const store = configureStore({
    reducer: {
    auth : authReducer,
    products :productReducer,
    cart: cartReducer
    }
});

export default store;