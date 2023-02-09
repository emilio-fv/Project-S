import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '../TablePaginationActions';
import samplePersonnel from '../../data/personnelData';
import Typography from '@mui/material/Typography';

const tableHeaders = [
  "Admin Level",
  "First Name",
  "Last Name",
  "Email",
  "Phone Number",
  "Actions"
]

const AdminTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = 
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - samplePersonnel.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <Paper sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '80%' }}>
        <Table stickyHeader aria-label="Table of personnel">
          <TableHead>
            <TableRow>
              {tableHeaders.map((item, key) => (
                <TableCell key={key} sx={{ fontWeight: 'bold' }}>{ item }</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
                ? samplePersonnel.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : samplePersonnel
              ).map((row, key) => (
                <TableRow key={key}>
                  <TableCell>
                    {row.adminLevel}
                  </TableCell>
                  <TableCell>
                    {row.firstName}
                  </TableCell>
                  <TableCell>
                    {row.lastName}
                  </TableCell>
                  <TableCell>
                    {row.email}
                  </TableCell>
                  <TableCell>
                    {row.phone}
                  </TableCell>
                  <TableCell>
                    <Typography>Edit</Typography>
                    <Typography>Delete</Typography>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )
              }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination 
        sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0px 25px'}}
        rowsPerPageOptions={[5,10, { label: 'All', value: -1}]}
        colSpan={4}
        count={samplePersonnel.length}
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

export default AdminTable;