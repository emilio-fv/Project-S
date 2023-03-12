import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectTicketsTable from '../ProjectTicketsTable';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProjectDetails = (props) => {
    const { projectId } = useParams();
    const project = useSelector((state) => state.projects.projects.find(project => project._id === projectId));

    return (
        <Box sx={{ height: '90%', width: '100%', display: 'flex' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box sx={{ flex: 2 }}>
                    <Typography variant='h6' component='h2'>Description</Typography>
                    <Typography variant='p'>{project.description}</Typography>
                </Box>
                <Box sx={{ flex: 3 }}>
                    <Typography variant='h6' component='h2'>Team Members</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography component='p'>{project.projectManager.firstName} {project.projectManager.lastName} (Project Manager)</Typography>
                        {project.team.map((member) => (
                            <Typography component='p'>{member.firstName} {member.lastName} (Developer)</Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 2 }}>
                <Typography variant='h6' component='h2'>Tickets</Typography>
                <ProjectTicketsTable tickets={project.tickets}/>
            </Box>
        </Box>
    )
}

export default ProjectDetails;