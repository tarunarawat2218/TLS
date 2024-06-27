// src/components/VocationalEducation.js
import React from 'react';
import { Container, Grid, Typography,Box } from '@mui/material';
import CourseCard from './VocationCard';
import Navbar from '../header/Navbar';
import { styled } from '@mui/system';



const Banner = styled(Box)(({ theme }) => ({
    backgroundColor: '#003285',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(20, 0),
  }));
const courses = [
  {
    title: 'Course 1',
    description: 'Description for Course 1',
    price: 1000,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Course 2',
    description: 'Description for Course 2',
    price: 1500,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Course 3',
    description: 'Description for Course 3',
    price: 2000,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Course 4',
    description: 'Description for Course 4',
    price: 2500,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Course 5',
    description: 'Description for Course 5',
    price: 3000,
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Course 6',
    description: 'Description for Course 6',
    price: 3500,
    image: 'https://via.placeholder.com/150',
  },
];

const VocationalEducation = () => {
  return (
    <Box>
        <Navbar/>
        <Banner>
        <Typography variant="h3" fontWeight="bold">Vocational Training and Programs</Typography>
        <Typography variant="h4" fontWeight='bold'>"Empowering Carrer through industry relvent Training Programs"</Typography>
        {/* <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={handleExploreClick}>
          Explore Internships
        </Button> */}
      </Banner>
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Vocational Education
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default VocationalEducation;
