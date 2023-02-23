// Import configureStore, usersReducer
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import projectsReducer from './features/projects/projectsSlice';
import personnelReducer from './features/personnel/personnelSlice';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
        personnel: personnelReducer
        // TODO: tickets
        // TODO: comments
    },
});