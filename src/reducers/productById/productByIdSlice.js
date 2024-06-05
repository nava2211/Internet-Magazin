import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

export const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
});

export default productByIdSlice.reducer;