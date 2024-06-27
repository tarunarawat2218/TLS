import axios from 'axios';

// Adjust the baseURL to point to your backend server
const api = axios.create({
  baseURL:  'http://localhost:8080/api/v1/auth', // Use environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to handle errors
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code outside of the 2xx range
    console.error('Error response:', error.response.data);
    throw error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Error request:', error.request);
    throw new Error('Network error: Please check your internet connection.');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error message:', error.message);
    throw new Error('An unexpected error occurred.');
  }
};

// Function to register a user
export const registerUserApi = async (userData) => {
  try {
    console.log('Registering user with data:', userData); // Log user data
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Function to verify OTP
export const verifyOtpApi = async (otp) => {
  try {
    const response = await api.post('/verify-otp', { otp });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Function to login a user
export const loginUserApi = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
