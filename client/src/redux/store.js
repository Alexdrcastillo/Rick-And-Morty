import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/reducer.js/user/userSlice"
import cartReducer from "../redux/reducer.js/cart/cartSlice"

export default configureStore({
    reducer: {
       user: userReducer,
       cart: cartReducer
    }
}) 