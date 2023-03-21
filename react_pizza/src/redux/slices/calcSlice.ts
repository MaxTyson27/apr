import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    result: 0,
  },
  reducers: {
    plus: (state, action) => {
      state.result =
        +action.payload.leftInputValue + +action.payload.rightInputValue;
    },
    minus: (state, action) => {
      state.result =
        +action.payload.leftInputValue - +action.payload.rightInputValue;
    },
    multiply: (state, action) => {
      state.result =
        +action.payload.leftInputValue * +action.payload.rightInputValue;
    },
    divide: (state, action) => {
      state.result =
        +action.payload.leftInputValue / +action.payload.rightInputValue;
    },
  },
});

export const { plus, minus, multiply, divide } = calcSlice.actions;

export default calcSlice.reducer;
