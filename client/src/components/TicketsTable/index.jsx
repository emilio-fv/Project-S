import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import sampleTickets from '../../data/ticketData';
import TablePaginationActions from '../TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';

const tableHeaders = [
  "Id",
  "Summary", 
  "Status", 
  "Priority",
  "Type",
  "Assigned To", 
  "Due Date"
];

const TicketsTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = 
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sampleTickets.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  }

  return (
    <Paper sx={{ height: '90%', width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '84%' }}>
        <Table stickyHeader aria-label="Table of project's tickets">
          <TableHead>
            <TableRow>
              { tableHeaders.map((item, key) => 
                  <TableCell sx={{ fontWeight: 'bold' }} key={key}>{ item }</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {( rowsPerPage > 0 
                ? sampleTickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : sampleTickets
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.summary}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.priority}
                  </TableCell>
                  <TableCell>
                    {row.type}
                  </TableCell>
                  <TableCell>
                    {row.assignedUsers}
                  </TableCell>
                  <TableCell>
                    {row.dueDate}
                  </TableCell>
                </TableRow>
              ))}
              { emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination Component */}
      <TablePagination 
        sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0px 25px'}}
        rowsPerPageOptions={[5,10, { label: 'All', value: -1}]}
        colSpan={4}
        count={sampleTickets.length}
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

export default TicketsTable;