import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = (props) => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/users/login', loginFormData, { withCredentials: true })
      .then(res => {
        console.log(res);
        navigate('/dashboard');
      })
      .catch(error => {
        console.log(error);
      })

    // setLoginFormData({
    //   email: '',
    //   password: ''
    // })
  }

  return (
    <Box>
      <Typography align='center' variant='h4' sx={{ marginBottom: '25px'}}>Login</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} >
        <TextField id="email" label="Email" variant="outlined" name="email" value={loginFormData.email} onChange={event => handleChange(event)} />
        <TextField id="password" label="Password" variant="outlined" name="password" value={loginFormData.password} onChange={event => handleChange(event)} />
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
      </Box>
    </Box>
  )
}

export default LoginForm;