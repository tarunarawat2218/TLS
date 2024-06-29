import axios from 'axios';

const submitForm = async (formData, token) => {
  const response = await axios.post(
    'http://localhost:8080/api/v1/university/submit-university-partnership',
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};

export default {
  submitForm,
};
