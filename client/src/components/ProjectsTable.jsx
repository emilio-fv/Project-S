import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

const tableHeaders = [
	"Project Name",
	"Description",
	"Role",
	"Team Members"
]

function createProject(name, description, role, team) {
    return { name, description, role, team }
}

const sampleProjects = [
    createProject('Note-d', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Project Manager', ["User 1", "User 2", "User 3", "User 4", "User 5"]),
    createProject('Project-s', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 'Developer', ["User 1", "User 2", "User 3"]),
    createProject('Twitter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Developer', ["User 1", "User 2", "User 3", "User 4"]),
    createProject('Netflix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Developer', ["User 1", "User 2", "User 3"])
]

const ProjectsTable = (props) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Table of logged in user's projects">
                    <TableHead>
                        <TableRow>
                            { tableHeaders.map((item, key) => 
                                <TableCell sx={{ fontWeight: 'bold' }} key={key}>{ item }</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { sampleProjects.map((item, key) => {
                                return (<TableRow key={key}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {
                                            item.team.map((name, key) => {
                                                return (
                                                    <Typography>{name}</Typography>
                                                )
                                            })
                                        }
                                    </TableCell>
                                </TableRow>)
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ProjectsTable;