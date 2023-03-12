import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '../TablePaginationActions';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchManyProjects, reset } from '../../features/projects/projectsSlice';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { loggedInCheck } from '../../features/auth/authSlice';

const tableHeaders = [
	"Project Name",
	"Description",
	"Role",
	"Team Members",
]

const ProjectsTable = (props) => {
    // Store
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);
    const { projects, status } = useSelector((state) => state.projects);

    // Table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Fetch project data
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchManyProjects({ ids: currentUser.projects }))
        }

        if (status === 'succeeded') {
            dispatch(reset())
        }
    }, [ dispatch, currentUser ])

    const emptyRows = 
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projects.length) : 0

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    let tableBody;

    if (projects.length === 0 || status === 'loading' ) {
        tableBody = <Typography>No projects yet!</Typography>
    } else if  (projects.length !== 0) {
        tableBody = 
        <TableBody>
            {( rowsPerPage > 0
                ? projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : projects
            ).map((row, key) => (
                <TableRow key={key}>
                    <TableCell>
                        <Link component={RouterLink} to={`/project/${row._id}`} underline='none'>{row?.name}</Link>
                    </TableCell>
                    <TableCell>
                        {row.description?.substring(0,75)}...
                    </TableCell>
                    <TableCell>
                        { (currentUser._id === row.projectManager._id)
                            ? "Project Manager"
                            : "Developer"
                        }
                    </TableCell>
                    <TableCell sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        { (currentUser._id !== row.projectManager._id)
                            ? <Typography>{row.projectManager.firstName} {row.projectManager.lastName}</Typography>
                            : null
                        }

                        { row.team.filter((person) => person._id !== currentUser._id ).map((person) =>
                                <Typography>{person.firstName} {person.lastName}</Typography>
                        )}
                    </TableCell>
                </TableRow>
            ))}
            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
            </TableRow>
            )}
        </TableBody>
    }

    return (
      <Paper sx={{ height: '90%', width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '88%' }}>
            <Table stickyHeader aria-label="Table of logged in user's projects">
                <TableHead>
                    <TableRow>
                        { tableHeaders.map((item, key) => 
                            <TableCell sx={{ fontWeight: 'bold' }} key={key}>{ item }</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                {tableBody}
            </Table>
        </TableContainer>
        <TablePagination 
            sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0px 25px'}}
            rowsPerPageOptions={[5,10, { label: 'All', value: -1}]}
            colSpan={4}
            count={projects.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
                inputProps: {
                    'aria-label': 'rows per page'
                },
                native: true
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
        />
      </Paper>
    )
}

export default ProjectsTable;