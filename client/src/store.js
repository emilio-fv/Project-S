// Import configureStore, usersReducer
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import projectsReducer from './features/projects/projectsSlice';
import personnelReducer from './features/personnel/personnelSlice';
import ticketReducer from './features/tickets/ticketsSlice';
import commentsReducer from './features/comments/commentsSlice';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
        personnel: personnelReducer,
        tickets: ticketReducer,
        comments: commentsReducer
    },
});