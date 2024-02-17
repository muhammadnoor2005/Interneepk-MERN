import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";

const store = configureStore({
    reducer:{
        counter:counterSlice
    }
});
export default store;