import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '../TablePaginationActions';
import { useState } from 'react';
import sampleProjects from '../../data/projectData'
import { Typography } from '@mui/material';

const tableHeaders = [
	"Project Name",
	"Description",
	"Role",
	"Team Members"
]

const ProjectsDisplay = (props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = 
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sampleProjects.length) : 0

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                <TableBody>
                  {(rowsPerPage > 0
                      ? sampleProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : sampleProjects
                  ).map((row) => (
                      <TableRow key={row.name}>
                          <TableCell>
                              {row.name}
                          </TableCell>
                          <TableCell>
                              {row.description.substring(0,75)}...
                          </TableCell>
                          <TableCell>
                              {row.role}
                          </TableCell>
                          <TableCell sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                              {row.team.map((member) => (
                                <Typography>{member}</Typography>
                              ))}
                          </TableCell>
                      </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

            </Table>
        </TableContainer>
        <TablePagination 
            sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0px 25px'}}
            rowsPerPageOptions={[5,10, { label: 'All', value: -1}]}
            colSpan={4}
            count={sampleProjects.length}
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

export default ProjectsDisplay;