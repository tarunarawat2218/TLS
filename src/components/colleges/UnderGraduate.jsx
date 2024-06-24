import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography, Avatar, Icon, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/system';

// Custom styling for slick dots
const SlickDots = styled('ul')({
  bottom: '-25px',
  '& li.slick-active button:before': {
    color: '#8B93FF',
  },
  '& li button:before': {
    fontSize: '15px',
    color: '#5755FE',
  }
});

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Olive Yew",
    title: "CEO, Psdboss",
    image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    review: "I would also like to say thank you to all your staff. It's the perfect solution for our business. Education is the most valuable business resource we have EVER purchased.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Zokatti",
    title: "CEO, Psdboss",
    image: "https://experteditor.com.au/wp-content/uploads/2023/07/signs-youre-a-great-person.png",
    review: "Engage with our professional real estate agents to sell, buy, or rent your home. Get emails directly in your inbox. Quis ipsum suspendisse ultrices gravida.",
    rating: 4
  },
  {
    id: 3,
    name: "Judy N",
    title: "CEO, Psdboss",
    image: "https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg",
    review: "Your company is truly upstanding and is behind its product 100%. I STRONGLY recommend education to EVERYONE interested in running a successful online business.",
    rating: 5
  },
  {
    id: 4,
    name: "Gabbey A.",
    title: "CEO, Psdboss",
    image: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    review: "Just what I was looking for. Best. Product. Ever! Education is great. Education is the most valuable business resource we have EVER purchased.",
    rating: 4
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => <SlickDots>{dots}</SlickDots>,
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '60px 0', textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>What our clients Say About us</Typography>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <Card key={testimonial.id} sx={{ padding: 4, margin: '0 auto', maxWidth: 900, position: 'relative', marginBottom: '2rem', textAlign: 'left' }}>
            <Icon sx={{ position: 'absolute', top: 8, left: 16, color: 'blue', fontSize: 50 }}>
              <FormatQuoteRoundedIcon sx={{ transform: 'scale(-1, -1)' }} />
            </Icon>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 100, height: 100, marginBottom: 2 }} />
              <CardContent>
                <Typography variant="body1" mb={2}>{testimonial.review}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="subtitle1">{testimonial.title}</Typography>
                  </Box>
                  <Box>
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <StarIcon key={index} sx={{ color: 'gold' }} />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlider;
