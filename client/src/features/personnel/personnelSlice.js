import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import personnelService from './personnelService';

const initialState = {
    personnel: [],
    status: 'idle',
    error: null
};

// Get All Personnel
export const fetchAllPersonnel = createAsyncThunk('personnel/fetchAll', async () => {
    return await personnelService.fetchAllPersonnel();
});

// Personnel Slice
export const personnelSlice = createSlice({
    name: 'personnel',
    initialState,
    reducers: {},
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
                state.error = action.error.message
            })
    }
});

export default personnelSlice.reducer;