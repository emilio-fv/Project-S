import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePaginationActions from '../TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';
import { selectTicket } from '../../features/tickets/ticketsSlice';
import { useDispatch } from 'react-redux';
import { getManyComments } from '../../features/comments/commentsSlice';

const tableHeaders = [
  "Id",
  "Summary", 
  "Status", 
  "Priority",
  "Type",
  "Assigned To", 
  "Due Date"
];

const ProjectTicketsTable = (props) => {
  const { tickets } = props;
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const emptyRows = 
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tickets.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  }

  // Handle Ticket Select
  const handleSelectTicket = (event, ticketId) => {
    // Select Ticket
    dispatch(selectTicket(ticketId));
    const selectedTicket = tickets.find((ticket) => ticket._id === ticketId)
    dispatch(getManyComments({ ids: selectedTicket.comments}));
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
                ? tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : tickets
              ).map((row, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <Link 
                      sx={{ cursor: 'pointer' }} 
                      underline='hover' 
                      onClick={event => handleSelectTicket(event, row._id)} 
                    >
                      ...{row._id.slice(-6)}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {row.summary.length > 10 
                      ? row.summary.substring(0,12) + '...'
                      : row.summary
                    }
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.priority}
                  </TableCell>
                  <TableCell>
                    {row.ticketType}
                  </TableCell>
                  <TableCell>
                    {row.assignedUser.firstName} {row.assignedUser.lastName}
                  </TableCell>
                  <TableCell>
                    {new Date(row.dueDate).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}
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
      <TablePagination 
        sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0px 25px'}}
        rowsPerPageOptions={[5,10, { label: 'All', value: -1}]}
        colSpan={4}
        count={tickets.length}
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

export default ProjectTicketsTable;