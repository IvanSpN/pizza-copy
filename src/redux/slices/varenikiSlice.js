import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVareniki = createAsyncThunk(
  'vareniki/fetchVarenikiStatus',
  async (params) => {
    const { sortBy, order, category, search } = params;
    const { data } = await axios.get(
      `https://652806e5931d71583df1c236.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const varenikiSlice = createSlice({
  name: 'vareniki',
  initialState,

  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchVareniki.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchVareniki.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchVareniki.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectVarenikiData = (state) => state.vareniki;

export const { setItems } = varenikiSlice.actions;

export default varenikiSlice.reducer;
