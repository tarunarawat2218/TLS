import React, { useState } from 'react';
import { TextField, MenuItem, FormControlLabel, Checkbox, Button, Box, Typography } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    preferredStream: '',
    needHelp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const streamOptions = [
    'Engineering',
    'Medical',
    'Commerce',
    'Arts',
    'Science',
    'Management',
    // Add more options as needed
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', mt: 2, mb:5 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Register with us
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email ID"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        select
        label="Preferred Stream"
        name="preferredStream"
        value={formData.preferredStream}
        onChange={handleChange}
        fullWidth
        required
      >
        {streamOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <FormControlLabel
        control={
          <Checkbox
            name="needHelp"
            checked={formData.needHelp}
            onChange={handleChange}
          />
        }
        label="Need help to choose the right college?"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default RegistrationForm;
