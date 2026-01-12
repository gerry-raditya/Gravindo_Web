import { categoryReducer, productReducer } from "@/store";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    category : categoryReducer,
    product : productReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch