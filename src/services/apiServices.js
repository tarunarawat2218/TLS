import axios from 'axios';

class ApiService {
    baseURL = 'http://localhost:8080/api/v1';

    async loginUser(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/login`, { email, password });
            console.log(response);
            return response.data.data;
        } catch (error) {
            console.error('Login error:', error);
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }

    async registerUser(name, email, password, phone, address, answer) {
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, { name, email, password, phone, address, answer });
            console.log(response);
            return response.data.data;
        } catch (error) {
            console.error('Register error:', error);
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }

    // Other methods...
}

export default new ApiService();
