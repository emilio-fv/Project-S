import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentsService from './commentsService';

const initialState = {
    comments: [],
    status: 'idle',
    error: null
};

// Create Comment
export const createComment = createAsyncThunk('comments/createOne', async (commentData, thunkAPI) => {
    try {
        return await commentsService.createComment(commentData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Get Many Comments
export const getManyComments = createAsyncThunk('comments/getMany', async (ids) => {
    return await commentsService.getManyComments(ids);
})


// Comment Slice
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        reset: (state) => {
            state.comments = []
            state.status = 'idle'
            state.error = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createComment.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createComment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.status = 'added'
                state.comments.push(action.payload)
            })
            .addCase(getManyComments.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getManyComments.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.comments = action.payload
            })
    }
});

export const { reset } = commentsSlice.actions;
export default commentsSlice.reducer;