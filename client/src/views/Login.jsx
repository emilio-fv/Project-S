import React from 'react';
import LoginForm from '../components/LoginForm';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Login = (props) => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', padding: '50px' }}>
      <Typography variant='h3' align='center' marginBottom={"25px"}>Project-S</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Login;