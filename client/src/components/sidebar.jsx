import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledButton from './StyledButton';
import AvatarImg from '../imgs/avatar_sample.png';
import { Link } from 'react-router-dom';
import LinkComponent from '@mui/material/Link';

const Sidebar = (props) => {
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
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '10px' }}>Emilio Vazquez</Typography>
                    <Typography variant="subtitle1" component="h3" sx={{ marginBottom: '25px' }}>Admin / Developer</Typography>
                    <LinkComponent href='#' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Dashboard</LinkComponent>
                    <LinkComponent href='#' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Tickets</LinkComponent>
                    <LinkComponent href='#' underline='none' sx={{ marginBottom: '10px', fontSize: '1.25rem' }} >Admin</LinkComponent>
                </Box>
                <StyledButton text="Logout" />
            </Box>
        </>
    )
}

export default Sidebar;