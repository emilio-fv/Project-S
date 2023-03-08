import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    user: null,
    status: 'idle',
    messages: {}
}

// Logged In User Check
export const loggedInCheck = createAsyncThunk('auth/loggedInCheck', async () => {
    return await authService.loggedInCheck();
})

// Register User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Login User
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const messages = error.response.data.error;
        console.log(messages);
        return thunkAPI.rejectWithValue(messages);
    }
})

// Logout User
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})

// Auth Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.messages = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.status = 'idle';
            })
            .addCase(loggedInCheck.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;