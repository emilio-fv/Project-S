import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectsService from './projectsService';

const initialState = {
    projects: [],
    status: 'idle',
    error: null
};

// Get Many Projects 
export const fetchManyProjects = createAsyncThunk('projects/fetchMany', async (ids) => {
    return await projectsService.fetchManyProjects(ids);
})


// Project Slice
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchManyProjects.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchManyProjects.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.projects = action.payload
            })
            .addCase(fetchManyProjects.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export default projectsSlice.reducer;