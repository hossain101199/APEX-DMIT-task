import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  companyName: "",
  status: "",
};

export const companySlice = createSlice({
  name: "companyFilterParams",
  initialState,
  reducers: {
    setCompanyFilterParams: (state, action) => {
      state.page = action.payload.page;
      state.companyName = action.payload.companyName;
      state.status = action.payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCompanyFilterParams } = companySlice.actions;

export default companySlice;
