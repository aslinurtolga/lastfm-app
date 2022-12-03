import { configureStore } from "@reduxjs/toolkit";
import albumListReducer from "../features/albumListSlice";
import albumReducer from "../features/albumsSlice";
import trackReducer from "../features/tracksSlice";

export const store = configureStore({
  reducer: {
    artistList: albumListReducer,
    albumList: albumReducer,
    tracksList: trackReducer,
  },
});
