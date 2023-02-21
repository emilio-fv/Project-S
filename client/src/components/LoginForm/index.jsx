import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, loggedInCheck, reset } from '../../features/auth/authSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedLabel from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';

const LoginForm = (props) => {
  // Login Form Data
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, messages } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      dispatch(loggedInCheck())
    }
  }, [])

  useEffect(() => {
    if (isError) {
      setErrorMessage(messages);
    }

    if (isSuccess || user ) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isSuccess, isError])


  // Error Messages
  const [errorMessage, setErrorMessage] = useState(null);

  // Password Visibility 
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Login Form Functions
  const handleChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginFormData))
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="div">
      <Typography align='center' variant='h4' sx={{ marginBottom: '25px'}}>Login</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={event => handleSubmit(event)}>
        <TextField 
          id="email" 
          label="Email" 
          variant="outlined" 
          name="email" 
          size="small"
          value={loginFormData.email} 
          onChange={event => handleChange(event)}
          error={!errorMessage ? false : true }
        />
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="input-password">Password</InputLabel>
          <OutlinedLabel 
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
            value={loginFormData.password}
            error={!errorMessage ? false : true }
            onChange={event => handleChange(event)} 
          />
          {!errorMessage ? null : 
            <FormHelperText error>{ errorMessage }</FormHelperText>
          }
        </FormControl>
        <Button variant="contained" type="submit">Login</Button>
      </Box>
      <Typography>Don't have an account? <Link to='/'>Register here</Link></Typography>
    </Box>
  )
}

export default LoginForm;