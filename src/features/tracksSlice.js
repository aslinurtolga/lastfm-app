import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchTracks = createAsyncThunk(
  "artists/fetchTracks",
  async (name) => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${apiKey}&format=json`
    ).then((res) => res.json());
  }
);

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.items = action.payload;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.loading = false;
      state.items = [];
      state.error = "Yüklenemedi";
    });
  },
});

export default tracksSlice.reducer;
