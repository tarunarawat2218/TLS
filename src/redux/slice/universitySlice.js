import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const submitUniversityPartnershipForm = createAsyncThunk(
  'university/submitForm',
  async ({ formData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/university/submit-university-partnership',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success('Form submitted successfully');
      return response.data;
    } catch (error) {
      toast.error('Error submitting form');
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const universitySlice = createSlice({
  name: 'university',
  initialState: {
    partnerships: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitUniversityPartnershipForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitUniversityPartnershipForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.partnerships.push(action.payload);
      })
      .addCase(submitUniversityPartnershipForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default universitySlice.reducer;
