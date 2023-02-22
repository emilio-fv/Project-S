// Import configureStore, usersReducer
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import projectsReducer from './features/projects/projectsSlice';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
        // TODO: tickets
        // TODO: comments
    },
});