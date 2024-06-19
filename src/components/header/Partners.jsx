import React from 'react';
import Slider from 'react-slick';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import './header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-2.png", title: "Brand 1" },
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-1.png", title: "Brand 2" },
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-3.png", title: "Brand 3" },
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-4.png", title: "Brand 4" },
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-5.png", title: "Brand 5" },
    { image: "https://data.themeim.com/html/tutorgo/assets/img/brand/brand-6.png", title: "Brand 6" },
];

const FeatureItem = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
}));

const StarRating = () => (
    <Box display="flex" alignItems="center">
        {[...Array(4)].map((_, index) => (
            <StarIcon key={index} style={{ color: 'gold' }} />
        ))}
        <StarIcon style={{ color: 'grey' }} />
    </Box>
);

const Partners = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust autoplay speed as needed
        arrows: false, // Hide arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: isMobile ? 2 : 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: isMobile ? 1 : 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            position="relative"
            top="-10vh" // Adjust this value as needed to position above the navbar
            left="14%"
            transform="translate(-50%, 0)"
            width="90%"
            maxWidth="1500px"
            bgcolor="white"
            borderRadius="8px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            p={2}
            zIndex="10" // Ensure it stays on top
            mt={isMobile ? 2 : 0} // Add margin top for mobile view
        >
            <Grid container spacing={2} >
                <Grid item xs={12} md={4} marginLeft={'5rem'}>
                    <Typography variant="h4" className="header-title">The Learn Skill</Typography>
                    <Typography>Join over 1490+ partners around the world</Typography>
                </Grid>
                <Grid item xs={12} md={4} container alignItems="center" justifyContent={isMobile ? "center" : "flex-start"}>
                    <StarRating />
                    <Typography variant="body2" color="textSecondary">4.5 Star Rating (20+ Review)</Typography>
                </Grid>
            </Grid>
            <Box mt={2}>
                <Slider {...settings} style={{ height: '100px', marginTop:"2rem" }}> {/* Adjust height as needed */}
                    {features.map((feature, index) => (
                        <Box key={index} className="tp-brand__item">
                            <img src={feature.image} alt={feature.title} style={{ maxWidth: '100%', height: '100%' }} />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default Partners;
