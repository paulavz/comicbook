import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ComicReducers from "./Reducers/ComicReducers";
import FavoriteReducers from "./Reducers/FavoriteReducers";
import ToggleViewReducers from "./Reducers/ToggleViewReducers";

export const store = configureStore({
  reducer: combineReducers({
    view: ToggleViewReducers,
    favorite:FavoriteReducers,
    comic:ComicReducers
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
