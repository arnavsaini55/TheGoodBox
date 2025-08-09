import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const Theme = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = Theme.actions;
export default Theme.reducer;
