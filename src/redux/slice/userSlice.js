// redux/slice/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi, verifyOtpApi, loginUserApi } from '../../services/apiServices';

// Async thunk to handle user registration
export const registerUser = createAsyncThunk('user/registerUser', async (formData, thunkAPI) => {
  try {
    const data = await registerUserApi(formData);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Async thunk to handle OTP verification
export const verifyOtp = createAsyncThunk('user/verifyOtp', async (otp, thunkAPI) => {
  try {
    const data = await verifyOtpApi(otp);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Async thunk to handle user login
export const loginUser = createAsyncThunk('user/loginUser', async (credentials, thunkAPI) => {
  try {
    const data = await loginUserApi(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
    isRegistered: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isRegistered = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export default userSlice.reducer;
