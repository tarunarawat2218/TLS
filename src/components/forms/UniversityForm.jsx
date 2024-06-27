import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    universityName: '',
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { universityName, name, email, comments } = formData;

    if (!universityName || !name || !email || !comments) {
      toast.error('Please complete all fields');
    } else {
      toast.success('Form submitted successfully');
      // Clear the form
      setFormData({
        universityName: '',
        name: '',
        email: '',
        comments: ''
      });
      handleClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Inquiry Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="University Name"
              name="universityName"
              fullWidth
              margin="normal"
              value={formData.universityName}
              onChange={handleChange}
            />
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Comments"
              name="comments"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.comments}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default InquiryForm;
