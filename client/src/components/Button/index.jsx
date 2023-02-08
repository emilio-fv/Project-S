import React from 'react';
import Button from '@mui/material/Button';

const StyledButton = (props) => {
    return (
        <Button style={props.style} onClick={props.clickAction} variant='contained'>{ props.text }</Button>
    )
}

export default StyledButton;