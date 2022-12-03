import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchArtistsList = createAsyncThunk(
  "artists/fetchArtistList",
  async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
    ).then((res) => res.json());
  }
);

export const albumListSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtistsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArtistsList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload;
    });
    builder.addCase(fetchArtistsList.rejected, (state) => {
      state.loading = false;
      state.items = [];
      state.error = "Yüklenemedi";
    });
  },
});

export default albumListSlice.reducer;
