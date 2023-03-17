import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledButton from '../StyledButton';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deleteProject } from '../../features/projects/projectsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainDisplay = (props) => {
    const { project } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (event) => {
        dispatch(deleteProject(project._id));
        navigate('/dashboard');
    };

    return (
        <Box sx={{ maxHeight: '60%', flex: 3, padding: '25px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <Typography variant='h5' component="h2">{ props.displayTitle }</Typography>
                    { props.icons === 'projectManager'
                        ? <IconButton aria-label="delete project" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                        : null
                    }
                </Box>
                { props.buttonText
                    ? <StyledButton clickAction={ props.clickAction } text={ props.buttonText } />
                    : ""
                }
            </Box>
            {
                props.display
            }
        </Box>
    )
}

export default MainDisplay;