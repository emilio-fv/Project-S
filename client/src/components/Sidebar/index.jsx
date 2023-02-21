import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledButton from '../Button/index';
import AvatarImg from '../../imgs/avatar_sample.png';
import LinkComponent from '@mui/material/Link';

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = (event) => {
        dispatch(logout());
        dispatch(reset());
    }

    return (
        <>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', paddingY: '25px' }}>
                <Box sx={{  display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                    <Box 
                        component="img"
                        sx={{
                            height: 120,
                            width: 120,
                            borderRadius: '50%',
                            boxShadow: '0px 0px 25px white',
                            marginBottom: '25px'
                        }}
                        alt="Avatar icon"
                        src={ AvatarImg }
                        loading="lazy"
                    />
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '10px' }}>{ user? user.firstName : '' } { user? user.lastName : '' } </Typography>
                    <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '25px' }}>TODO</Typography>
                    <LinkComponent href='/dashboard' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Dashboard</LinkComponent>
                    <LinkComponent href='/tickets' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Tickets</LinkComponent>
                    <LinkComponent href='/admin' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Admin</LinkComponent>
                </Box>
                <StyledButton clickAction={handleLogout} text="Logout"/>
            </Box>
        </>
    )
}

export default Sidebar;