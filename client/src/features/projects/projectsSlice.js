import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

// Project Slice
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
    }
});

export default projectsSlice.reducer;