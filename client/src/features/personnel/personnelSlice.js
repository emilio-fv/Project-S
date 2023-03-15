import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import personnelService from './personnelService';

const initialState = {
    personnel: [],
    status: 'idle',
    errors: null
};

// Get All Personnel
export const fetchAllPersonnel = createAsyncThunk('personnel/fetchAll', async () => {
    return await personnelService.fetchAllPersonnel();
});

// Update Personnel
export const updatePersonnel = createAsyncThunk('personnel/updateOne', async (userData, thunkAPI) => {
    try {
        return await personnelService.updatePersonnel(userData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Personnel Slice
export const personnelSlice = createSlice({
    name: 'personnel',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle'
            state.errors = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllPersonnel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllPersonnel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.personnel = action.payload
            })
            .addCase(fetchAllPersonnel.rejected, (state, action) => {
                state.status = 'failed'
                state.errors = action.error.message
            })
            .addCase(updatePersonnel.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updatePersonnel.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.personnel.forEach((user, index) => {
                    if (user._id === action.payload._id) {
                        state.personnel[index] = action.payload
                    }
                })
            })
            .addCase(updatePersonnel.rejected, (state, action) => {
                state.status = 'failed'
                state.errors = action.payload
            })
    }
});

export default personnelSlice.reducer;