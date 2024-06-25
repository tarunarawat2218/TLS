import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services/apiServices';

export const loginUser = createAsyncThunk('login', async ({ email, password }) => {
    return await ApiService.loginUser(email, password);
});

export const registerUser = createAsyncThunk('register', async ({ name, email, password, phone, answer }) => {
    return await ApiService.registerUser(name, email, password, phone, answer);
});

const initialState = {
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        checkLoginStatus: (state) => {
            const token = localStorage.getItem('token');
            console.log(token);
            state.isLoggedIn = token !== null;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.token = null;
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.token = null;
                state.error = action.error.message;
            });
    },
});

export const { checkLoginStatus, logout } = userSlice.actions;

export default userSlice.reducer;
