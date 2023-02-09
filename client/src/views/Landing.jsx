import React from 'react';
import Container from '@mui/material/Container';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Landing = (props) => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <RegisterForm />
      <LoginForm />
    </Container>
  )
}

export default Landing;