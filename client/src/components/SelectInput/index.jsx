import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectInput = (props) => {
  return (
    <FormControl sx={{ minWidth: '100%' }}>
      <InputLabel id={props.inputLabel}>{props.label}</InputLabel>
      <Select
        labelId={props.inputLabel}
        id="select-input"
        value={props.value}
        label={props.label}
        onChange={props.handleChange}
      >
        {props.menuItems.map((item, row) => (
          <MenuItem value={item.value}>{item.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectInput;