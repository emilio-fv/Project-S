import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketsService from './ticketsService';

const initialState = {
    tickets: [],
    selected: null,
    status: 'idle',
    error: null
};

// Create Ticket
export const createTicket = createAsyncThunk('tickets/createOne', async (ticketData, thunkAPI) => {
    try {
        return await ticketsService.createTicket(ticketData);
    } catch (error) {
        console.log(error);
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
});

// Get Many Tickets
export const getManyTickets = createAsyncThunk('tickets/getMany', async (ids) => {
    return await ticketsService.getManyTickets(ids);
});

// Update Ticket
export const updateTicket = createAsyncThunk('tickets/updateOne', async (ticketData) => {
    return await ticketsService.updateTicket(ticketData);
});

// Delete Ticket
export const deleteTicket = createAsyncThunk('tickets/deleteOne', async (id) => {
    return await ticketsService.deleteTicket(id);
});

// Ticket Slice
export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle'
            state.error = null
        },
        selectTicket: (state, action) => {
            state.selected = action.payload
        },
        resetSelected: (state) => {
            state.selected = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createTicket.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(createTicket.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tickets.push(action.payload)
            })
            .addCase(getManyTickets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getManyTickets.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(getManyTickets.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tickets = action.payload
            })
            .addCase(updateTicket.fulfilled, (state, action) => {
                state.status = 'idle'
                let index = state.tickets.findIndex((ticket) => ticket._id === action.payload._id)
                state.tickets[index] = action.payload
            })
            .addCase(deleteTicket.fulfilled, (state, action) => {
                state.status = 'idle'
                state.tickets = state.tickets.filter((ticket) => ticket._id !== action.payload._id)
            })
    }
});

export const { reset, selectTicket, resetSelected } = ticketsSlice.actions;
export default ticketsSlice.reducer;