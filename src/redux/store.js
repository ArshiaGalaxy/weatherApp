import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/reducer";

const store = configureStore({
    reducer: weatherReducer
});

export default store;