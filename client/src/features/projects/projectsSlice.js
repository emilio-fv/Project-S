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
});

// Fetch Many Projects 
export const fetchManyProjects = createAsyncThunk('projects/fetchMany', async (ids) => {
    return await projectsService.fetchManyProjects(ids);
});

// Fetch One Project
export const fetchOneProject = createAsyncThunk('projects/fetchOne', async (id) => {
    return await projectsService.fetchOneProject(id);
})

// Delete Project
export const deleteProject = createAsyncThunk('projects/deleteOne', async (id) => {
    return await projectsService.deleteProject(id);
});

// Project Slice
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        reset: (state) => {
            state.error = null
            state.status = 'idle'
        },
        logoutReset: (state) => {
            state.projects = []
            state.status = 'idle'
            state.error = null
        }
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
            .addCase(fetchOneProject.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchOneProject.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(fetchOneProject.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.projects.forEach((project, index) => {
                    if (project._id === action.payload._id) {
                        state.projects[index] = action.payload
                    }
                })
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
                state.status = 'idle'
                state.projects = state.projects.filter((project) => project._id !== action.payload._id)
            })
    }
});

export const { reset, logoutReset } = projectsSlice.actions;
export default projectsSlice.reducer;