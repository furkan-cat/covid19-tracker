import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "",
  total: undefined,
  stats: undefined,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setCountry, setTotal, setStats } = countrySlice.actions;
export default countrySlice.reducer;
