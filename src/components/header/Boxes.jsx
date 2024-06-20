import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const colors = ['#FFA500', '#1E90FF', '#FF4500', '#006400', '#32CD32', '#800080', '#008080', '#FFD700'];

const FeatureItem = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  justifyContent: 'center',
  textAlign: 'center',
  width: '20rem',
  minHeight: '200px',
  transition: 'transform 0.3s ease',

  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-5px)',
  },

  '&:hover:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '100%',
    height: '4px',
    transform: 'translateX(-50%)',
  },
}));

const FeaturedTopics = () => {
  const topics = [
    // { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/design-icon.png', title: 'Design', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/man-cions.png', title: 'Management', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/code-cions.png', title: 'Programming', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/bag-icon.png', title: 'Business', link: 'course.html' },
    // { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/music-icons.png', title: 'Audio + Music', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/doller-icon.png', title: 'Finance', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/cal-icon.png', title: 'Accounting', link: 'course.html' },
    { icon: 'https://data.themeim.com/html/tutorgo/assets/img/icons/pen-icon.png', title: 'Content Writing', link: 'course.html' },
  ];

  return (
    <Box className="tp-feature__section pt-120 pb-30">
      <Typography variant='h4' align="center" mb="2rem">
        Popular Topic, Which are Most Favourite To Students
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {topics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ margin: '0.5rem' }}>
            <FeatureItem
              elevation={3}
              sx={{
                '&:hover:before': {
                  backgroundColor: colors[index % colors.length],
                },
              }}
            >
              <img src={topic.icon} alt={topic.title} style={{ width: '40px', marginBottom: '20px' }} />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                <Link to={topic.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {topic.title}
                </Link>
              </Typography>
              <Typography variant="body2">400+ Course</Typography>
            </FeatureItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedTopics;
