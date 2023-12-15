import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk(
  'message/fetchMessages',
  async () => {
    const response = await axios.get('http://localhost:3001/api/v1/messages');
    return response.data;
  },
);

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: {
    [fetchMessages.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    },
    [fetchMessages.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
