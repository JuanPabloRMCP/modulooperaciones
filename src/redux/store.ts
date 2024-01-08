import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { autenticacionSlice } from "./state/Autenticacion";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
	reducer: {
		autenticacion: autenticacionSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});
