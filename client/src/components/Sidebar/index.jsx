import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, logoutReset } from '../../features/auth/authSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledButton from '../StyledButton/index';
import AvatarImg from '../../imgs/avatar.png';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { logoutReset as projectsReset } from '../../features/projects/projectsSlice';
import { logoutReset as ticketsReset } from '../../features/tickets/ticketsSlice';

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const isAdmin = user.admin;

    const handleLogout = (event) => {
        dispatch(logout());
        dispatch(logoutReset()); // Reset User
        dispatch(projectsReset()) // Reset Projects
        dispatch(ticketsReset()) // Reset Tickets
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
                            boxShadow: '0px 0px 10px grey',
                            marginBottom: '25px'
                            
                        }}
                        alt="Avatar icon"
                        src={ AvatarImg }
                        loading="lazy"
                    />
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '10px' }}>{ user? user.firstName : '' } { user? user.lastName : '' } </Typography>
                    <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '25px' }}>{ isAdmin ? 'Admin / ' : ''}Developer</Typography>
                    <Link component={RouterLink} to='/dashboard' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Dashboard</Link>
                    <Link component={RouterLink} to='/tickets' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }}>Tickets</Link>
                    { isAdmin
                        ? <Link component={RouterLink} to='/admin' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Admin</Link>
                        : null
                    }
                </Box>
                <StyledButton clickAction={handleLogout} text="Logout"/>
            </Box>
        </>
    )
}

export default Sidebar;