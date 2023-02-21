// Import configureStore, usersReducer
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        // TODO: projects: 
        // TODO: tickets
        // TODO: comments
    },
});