//jshint esversion:6
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  selectedImage: null,
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user =null;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload
    },
    resetImage: (state) => {
      state.selectedImage = null;
    }
  },

});

export const { login, logout, selectImage, resetImage } = appSlice.actions;

export const selectapp = (state) => state.app.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectapp(getState());
  if (currentValue % 2 === 1) {
    dispatch(login(amount));
  }
};

export const selectUser = (state) => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;

export default appSlice.reducer;
