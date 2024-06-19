import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar'

function getCourseDetails(id) {
  const courses = {
    1: { id: 1, title: 'Short Term Financial Course 1', image: 'https://images.pexels.com/photos/12425927/pexels-photo-12425927.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 1', price: 100, duration: '1 month', rating: 4.5 },
    2: { id: 2, title: 'Short Term Financial Course 2', image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 2', price: 150, duration: '1.5 months', rating: 4.0 },
    3: { id: 3, title: 'Short Term Financial Course 3', image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 3', price: 200, duration: '2 months', rating: 4.8 },
    4: { id: 4, title: 'Short Term Tech Course 1', image: 'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 4', price: 250, duration: '2 months', rating: 4.2 },
    5: { id: 5, title: 'Short Term Tech Course 2', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 5', price: 300, duration: '1 month', rating: 4.6 },
    6: { id: 6, title: 'Short Term Tech Course 3', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 6', price: 400, duration: '1.5 months', rating: 4.3 },
    7: { id: 7, title: 'Short Term Management Course 1', image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 7', price: 500, duration: '2 months', rating: 4.7 },
    8: { id: 8, title: 'Short Term Management Course 2', image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 8', price: 600, duration: '2 months', rating: 4.9 },
    9: { id: 9, title: 'Short Term Management Course 3', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description of Course 9', price: 350, duration: '1 month', rating: 4.4 },
    // Add more course details here...
  };
  return courses[id] || {};
}

function CourseDetails() {
  const { id } = useParams();
  const course = getCourseDetails(id);

  return (
    <Box>
      <Navbar/>
    <Container>
      <Typography variant="h4" gutterBottom>{course.title}</Typography>
      {course.image && (
        <img src={course.image} alt={course.title} style={{ width: '50%', height: '50', marginBottom: '1rem' }} />
      )}
      <Typography variant="body1" paragraph>{course.description}</Typography>
      <Typography variant="body2" color="text.secondary">Price: ${course.price}</Typography>
      <Typography variant="body2" color="text.secondary">Duration: {course.duration}</Typography>
      <Box display="flex" alignItems="center" mt={1}>
        <StarIcon color="primary" />
        <Typography variant="body2" color="text.secondary" ml={0.5}>{course.rating}</Typography>
      </Box>
    </Container>
      <Footer/>
    </Box>
  );
}

export default CourseDetails;
