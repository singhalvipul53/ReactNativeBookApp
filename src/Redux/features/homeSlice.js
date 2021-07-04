import {createSlice} from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    headerName: 'Vipul Singhal',
    displayBook: {
      key: 3,
      name: 'The Tiny Dragon',
      image: 'https://images-na.ssl-images-amazon.com/images/I/712ZCGOQ4wL.jpg',
      time: '3d 9h',
      author: 'Vipul Singhal',
      percent: '45%',
      pages: 180,
      language: 'Eng',
      rating: 4.5,
    },
  },
  reducers: {
    changeName: (state, action) => {
      state.headerName = action.payload;
    },
    changeBook: (state, action) => {
      state.displayBook = action.payload;
    },
  },
});

export const {changeName, changeBook} = homeSlice.actions;
export const selectName = state => state.home.headerName;
export const selectBook = state => state.home.displayBook;

export default homeSlice.reducer;
