import React, { useEffect, useState } from 'react';
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
import StyledButton from '../Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { updatePersonnel } from '../../features/personnel/personnelSlice';

const tableHeaders = [
  "Admin",
  "First Name",
  "Last Name",
  "Email",
  "Phone Number",
  "Actions"
]

const AdminTable = (props) => {
  // Store
  const dispatch = useDispatch();
  const {personnel, status: personnelStatus, errors} = useSelector((state) => state.personnel);
  const [editRow, setEditRow] = useState(null);

  // Updated Personnel Form Data
  const [updatedPersonnel, setUpdatedPersonnel] = useState({
    _id: null,
    firstName: null,
    lastName: null,
    phone: null,
    admin: null
  })
  const [errorMessages, setErrorMessages] = useState(null);

  // Table 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - personnel.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  // Error Messages, Successful Save
  useEffect(() => {
    if (personnelStatus === 'failed') {
      console.log(errors);
      setErrorMessages(errors);
    }

    if (personnelStatus === 'succeeded') {
      setEditRow(null);
      setUpdatedPersonnel({
        firstName: null,
        lastName: null,
        phone: null,
        admin: null
      })
    }
  }, [personnelStatus, errors]);

  // Handle Click Edit Link 
  const handleEditClick = (event, rowId) => {
    setEditRow(rowId);
    let selectedPersonnel = personnel.find((user) => user._id === rowId)
    setUpdatedPersonnel({
      _id: selectedPersonnel._id,
      firstName: selectedPersonnel.firstName,
      lastName: selectedPersonnel.lastName,
      phone: selectedPersonnel.phone,
      admin: selectedPersonnel.admin
    })
  }

  // Handle Form Changes 
  const handlePersonnelInfoChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPersonnel({
      ...updatedPersonnel,
      [name]: value
    })
  } 

  // Handle Save Button
  const handleSave = (event) => {
    // Dispatch update user reducer
    dispatch(updatePersonnel(updatedPersonnel));
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
                ? personnel.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : personnel
              ).map((row) => (
                editRow === row._id 
                  ? <TableRow>
                    <TableCell>
                      <FormControl>
                        <Select
                          size='small'
                          name='admin'
                          id='admin'
                          displayEmpty
                          value={updatedPersonnel.admin}
                          onChange={event => handlePersonnelInfoChange(event)}
                        >
                          <MenuItem value={true}>Yes</MenuItem>
                          <MenuItem value={false}>No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        size='small'
                        name='firstName'
                        variant='outlined'
                        fullWidth
                        onChange={event => handlePersonnelInfoChange(event)}
                        value={updatedPersonnel.firstName}
                        error={!errorMessages?.firstName ? false : true}
                        helperText={!errorMessages?.firstName ? "" : `${errorMessages?.firstName.message}`}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        size='small'
                        name='lastName'
                        variant='outlined'
                        fullWidth
                        onChange={event => handlePersonnelInfoChange(event)}
                        value={updatedPersonnel.lastName}
                        error={!errorMessages?.lastName ? false : true}
                        helperText={!errorMessages?.lastName ? "" : `${errorMessages?.lastName.message}`}
                      />
                    </TableCell>
                    <TableCell>
                      {row.email}
                    </TableCell>
                    <TableCell>
                      <TextField 
                        id="phone" 
                        variant="outlined" 
                        name="phone"
                        size="small"
                        value={updatedPersonnel.phone} 
                        error={!errorMessages?.phone ? false : true}
                        helperText={!errorMessages?.phone ? "" : `${errorMessages?.phone.message}`}
                        onChange={event => handlePersonnelInfoChange(event)}
                      />
                    </TableCell>
                    <TableCell>
                      <StyledButton size='small' text='Save' clickAction={handleSave}/>
                    </TableCell>
                  </TableRow>
                  : <TableRow key={row._id}>
                      <TableCell>
                        {row.admin ? "Yes" : "No"}
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
                        <Link
                          sx={{ cursor: 'pointer' }}
                          underline='hover'
                          onClick={(event) => handleEditClick(event, row._id)}
                        >
                          Edit
                        </Link>
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
        count={personnel.length}
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