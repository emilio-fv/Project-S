import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
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
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.messages = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.messages = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.messages = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(loggedInCheck.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;