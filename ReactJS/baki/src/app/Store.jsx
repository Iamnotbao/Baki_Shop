import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../features/CartSlice";
import {thunk} from "redux-thunk"

const store  = configureStore({
    reducer:{
        cart:cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
export default store;