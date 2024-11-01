import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import userReducer from "./accountSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;
