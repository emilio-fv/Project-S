import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import sampleProjects from '../data/projectData'
import { Typography } from '@mui/material';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const tableHeaders = [
	"Project Name",
	"Description",
	"Role",
	"Team Members"
]

export default function ProjectsTable() {
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
                    'aria-label': 'rows per page',
                },
                native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
        />
      </Paper>
    )
}