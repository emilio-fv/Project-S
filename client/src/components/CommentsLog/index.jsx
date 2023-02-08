import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import StyledButton from '../Button';
import sampleComments from '../../data/commentsData';

const styles = {
  flex: 1
}

const CommentsLog = (props) => {
  const handleClick = (event) => {
    console.log("comment button clicked");
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: '110px', overflow: 'scroll' }}>
        { sampleComments.map((item, key) => (
          <Box>
            <Typography sx={{ fontSize: '.8rem' }} >{ item.userId }</Typography>
            <Typography sx={{ fontSize: '.9rem' }}>{ item.text }</Typography>
            <Typography sx={{ fontSize: '.8rem' }} align='right'>{ item.createdAt.toDateString() }</Typography>
          </Box>
        ))}
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex' }} noValidate autoComplete="off">
        <TextField sx={{ flex: 3 }} size='small' id="outlined-basic" label="Comment" variant="outlined" margin="dense" />
        <StyledButton style={styles} clickAction={handleClick} text={'Add'}/>
      </Box>
    </Box>
  )
}

export default CommentsLog;