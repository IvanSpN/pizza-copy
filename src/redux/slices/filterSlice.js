import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  selectCategory: 0,
  selectCategorySort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectCategory(state, action) {
      state.selectCategory = action.payload;
    },
    setSelectCategorySort(state, action) {
      state.selectCategorySort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.selectCategorySort;

export const { setSelectCategory, setSelectCategorySort, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
