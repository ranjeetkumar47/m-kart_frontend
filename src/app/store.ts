import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authSlice from "../features/authSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		// sidebar: sidebarSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
