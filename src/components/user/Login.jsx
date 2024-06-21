import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Link, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';



const LoginPage = () => {

    const floatingAnimation1 = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(10px)' },
          { transform: 'translateY(0px)' },
        ],
        config: { duration: 1000 },
      });
    
      const floatingAnimation2 = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(10px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0px)' },
        ],
        config: { duration: 1000 },
      });
    
      const floatingAnimation3 = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(-15px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(15px)' },
          { transform: 'translateY(0px)' },
        ],
        config: { duration: 1000 },
      });
    
      const floatingAnimation4 = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(20px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-20px)' },
          { transform: 'translateY(0px)' },
        ],
        config: { duration: 1000 },
      });
    
      const floatingAnimation5 = useSpring({
        loop: true,
        from: { transform: 'translateY(0px)' },
        to: [
          { transform: 'translateY(-25px)' },
          { transform: 'translateY(0px)' },
          { transform: 'translateY(25px)' },
          { transform: 'translateY(0px)' },
        ],
        config: { duration: 1000 },
      });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "#EEF7FF"
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
          <Typography sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link href="/register" underline="hover">
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>

      <animated.div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '60px',
          height: '60px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/dots-shapes.png)',
          backgroundSize: 'cover',
          ...floatingAnimation1,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/role-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation2,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '70%',
          left: '97%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/lines-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation3,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          width: '60px',
          height: '60px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/book-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation4,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '95%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/circle-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation5,
        }}
      />


    </Box>
  );
};

export default LoginPage;
