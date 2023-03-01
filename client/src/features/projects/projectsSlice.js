import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectsService from './projectsService';

const initialState = {
    projects: [],
    status: 'idle',
    error: null
};

// Create Project
export const createProject = createAsyncThunk('projects/createOne', async (projectData, thunkAPI) => {
    try {
        return await projectsService.createProject(projectData);
    } catch (error) {
        console.log(error);
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Get Many Projects 
export const fetchManyProjects = createAsyncThunk('projects/fetchMany', async (ids) => {
    return await projectsService.fetchManyProjects(ids);
});

// Delete Project
export const deleteProject = createAsyncThunk('projects/deleteOne', async (id) => {
    return await projectsService.deleteProject(id);
})

// Project Slice
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle'
            state.error = null
        },
    },
    extraReducers(builder) {
        builder
            .addCase(createProject.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createProject.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.projects.push(action.payload)
            })
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
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.projects.pop();
                state.status = 'idle';
            })
    }
});

export const { reset } = projectsSlice.actions;
export default projectsSlice.reducer;