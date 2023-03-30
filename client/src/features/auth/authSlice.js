import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    user: null,
    status: 'idle',
    messages: null
}

// Register User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
});

// Login User
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const messages = error.response.data.error;
        return thunkAPI.rejectWithValue(messages);
    }
});

// Logged In User Check 
export const loggedInUserCheck = createAsyncThunk('auth/loggedInUserCheck', async() => {
    return authService.loggedInUserCheck();
})

// Logout User
export const logout = createAsyncThunk('auth/logout', async () => {
    return await authService.logout();
});

// Auth Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.messages = null
        },
        logoutReset: (state) => {
            state.user = null
            state.status = 'idle'
            state.messages = null
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
                state.messages = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.status = 'idle'
            })
            .addCase(loggedInUserCheck.fulfilled, (state, action) => {
                state.user = action.payload
                state.status = 'succeeded' 
            })
    }
});

export const { reset, logoutReset } = authSlice.actions;

export default authSlice.reducer;