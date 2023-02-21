import React from 'react';
import Button from '@mui/material/Button';

const StyledButton = (props) => {
    return (
        <Button style={props.style} onClick={event => props.clickAction(event)} variant='contained'>{ props.text }</Button>
    )
}

export default StyledButton;