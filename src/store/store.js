import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice";
import eventReducer from "./event/eventSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    account: accountReducer,
    events: eventReducer,
  },
});
