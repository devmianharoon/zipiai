import { configureStore } from "@reduxjs/toolkit";

import questionSlice from "../store/slices/questionSlice";
import locationReducer from "../store/slices/LocationSlice";
import chatReducer from "../store/slices/chatSlice";
import weatherReducer from "../store/slices/weatherSlice";
import zipReducer from "../store/slices/zipSlice";
import directvReducer from "../store/slices/directvSlice";

export const store = configureStore({
  reducer: {
    question: questionSlice,
    location: locationReducer,
    chat: chatReducer,
    weather: weatherReducer,
    zip: zipReducer,
    directv: directvReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
