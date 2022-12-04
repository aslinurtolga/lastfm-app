import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchAlbums = createAsyncThunk(
  "artists/fetchAlbums",
  async (name) => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json&`
    ).then((res) => res.json());
  }
);

export const albumSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload;
    });
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.loading = false;
      state.items = [];
      state.error = "Yüklenemedi";
    });
  },
});

export default albumSlice.reducer;
