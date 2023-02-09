import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Typography from '@mui/material/Typography';

const Landing = (props) => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', padding: '50px' }}>
      <Typography variant='h3' align='center' marginBottom={"25px"}>Project-S</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <RegisterForm />
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Landing;