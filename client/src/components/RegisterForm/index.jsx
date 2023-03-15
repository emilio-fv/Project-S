import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, loggedInCheck, reset } from '../../features/auth/authSlice';
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
import FormHelperText from '@mui/material/FormHelperText';

const RegisterForm = (props) => {
  // Register User Form Data
  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status, messages } = useSelector((state) => state.auth)

  // Check If User Logged In, Set Form Error Messages, Navigate to Dashboard, Reset Form 
  useEffect(() => {
    if (user === null) {
      dispatch(loggedInCheck());
    }

    if (status === 'failed') {
      setErrorMessages(messages);
    }

    if (status === 'succeeded' || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, status, navigate, dispatch])

  // Error Messages
  const [errorMessages, setErrorMessages] = useState({});

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  // Register Form Changes
  const handleRegisterFormChanges = (event) => {    
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value
    })
}

  // Register Form Submit
  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    dispatch(register(newUserData));
  }

  return (
    <Box component="div">
      <Typography 
        align="center" 
        variant="h4" 
        component="h2" 
        sx={{ marginBottom: '25px'}}
      >
        Register
      </Typography>
      <Box 
        component="form" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px' 
        }} 
        onSubmit={event => handleRegisterFormSubmit(event)} 
        autoComplete="off"
      >
        <TextField 
          id="firstName" 
          label="First Name" 
          variant="outlined" 
          name="firstName" 
          size="small"
          value={newUserData.firstName} 
          error={!errorMessages.firstName ? false : true}
          helperText={!errorMessages.firstName ? "" : `${errorMessages.firstName.message}`}
          onChange={event => handleRegisterFormChanges(event)}
        />
        <TextField 
          id="lastName" 
          label="Last Name" 
          variant="outlined" 
          name="lastName" 
          size="small"
          value={newUserData.lastName} 
          error={ !errorMessages.lastName ? false : true }
          helperText={ !errorMessages.lastName ? "" : `${errorMessages.lastName.message}`}
          onChange={event => handleRegisterFormChanges(event)}
        />
        <TextField 
          id="email" 
          label="Email" 
          variant="outlined" 
          name="email" 
          size="small"
          value={newUserData.email} 
          error={!errorMessages.email ? false : true}
          helperText={!errorMessages.email ? "" : `${errorMessages.email.message}`}
          onChange={event => handleRegisterFormChanges(event)}
        />
        <TextField 
          id="phone" 
          label="Phone Number" 
          variant="outlined" 
          name="phone" 
          size="small"
          value={newUserData.phone} 
          error={!errorMessages.phone ? false : true}
          helperText={!errorMessages.phone ? "" : `${errorMessages.phone.message}`}
          onChange={event => handleRegisterFormChanges(event)}
          />
        <FormControl 
          variant="outlined" 
          fullWidth 
          size="small"
        >
          <InputLabel htmlFor="input-password">Password</InputLabel>
          <OutlinedInput
            id="password"
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
            name="password"
            value={newUserData.password}
            error={!errorMessages.password ? false : true}
            onChange={event => handleRegisterFormChanges(event)}
          />
          {!errorMessages.password ? null : 
            <FormHelperText error >{ errorMessages.password.message }</FormHelperText>
          }
        </FormControl>
        <FormControl variant="outlined" fullWidth size="small">
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
            name="confirmPassword"
            error={ !errorMessages.confirmPassword ? false : true }
            value={newUserData.confirmPassword}
            onChange={event => handleRegisterFormChanges(event)}
          />
          {!errorMessages.confirmPassword ? null :
            <FormHelperText error>{ errorMessages.confirmPassword.message }</FormHelperText>
          }
        </FormControl>
        <Button variant="contained" type='submit'>Register</Button>
      </Box> 
      <Typography>Already register? <Link to='/login'>Login here</Link></Typography>
    </Box>
  )
}

export default RegisterForm;