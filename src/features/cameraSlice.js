// jshint esversion:6
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraImage: null,
  status: 'idle',
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
    
      state.cameraImage += 1;
    },
    decrement: (state) => {
      state.cameraImage -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCameraImage: (state, action) => {
      state.cameraImage += action.payload;
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;
    }
  },
 
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCameraImage(getState());
  if (currentValue % 2 === 1) {
    dispatch(setCameraImage(amount));
  }
};

export default cameraSlice.reducer;
