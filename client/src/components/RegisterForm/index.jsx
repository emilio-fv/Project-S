import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const RegisterForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerFormData, setRegisterFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {    
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value
    })
    console.log(registerFormData);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerFormData);
    setRegisterFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <Box>
      <Typography align='center' variant='h4' sx={{ marginBottom: '25px'}}>Register</Typography>
      <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} >
        <TextField id='firstName' label='First Name' variant='outlined' name='firstName' value={registerFormData.firstName} onChange={event => handleChange(event)}/>
        <TextField id='lastName' label='Last Name' variant='outlined' name='lastName' value={registerFormData.lastName} onChange={event => handleChange(event)}/>
        <TextField id='input-email' label='Email' variant='outlined' name='email' value={registerFormData.email} onChange={event => handleChange(event)}/>
        <TextField id='phone' label='Phone Number' variant='outlined' name='phone' value={registerFormData.phone} onChange={event => handleChange(event)}/>        
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="iput-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password'
            value={registerFormData.password}
            onChange={event => handleChange(event)}
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            name='confirmPassword'
            value={registerFormData.confirmPassword}
            onChange={event => handleChange(event)}
          />
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
      </Box> 
    </Box>
  )
}

export default RegisterForm;