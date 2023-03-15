import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import StyledButton from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../features/comments/commentsSlice';

const styles = {
  flex: 1
}

const CommentsLog = (props) => {
  const scrollRef = useRef(null);
  const { comments } = props;
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { selected } = useSelector((state) => state.tickets);
  const { status: commentsStatus } = useSelector((state) => state.comments);

  // Comment Form Data
  const [commentData, setCommentData] = useState({
    ticketId: selected,
    text: null,
    author: currentUser._id
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' }) ;
    }

    if (commentsStatus === 'added') {
      setCommentData({
        ...commentData,
        text: '',
      })
    }
  }, [comments])

  // Handle Changes
  const handleChanges = (event) => {
    setCommentData({
      ...commentData,
      text: event.target.value
    })
  };


  // Handle Add Comment
  const handleAddComment = (event) => {
    dispatch(createComment(commentData));
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: '110px', overflow: 'scroll' }}>
        { comments.map((comment, key) => (
          <Box key={comment._id}>
            <Typography sx={{ fontSize: '.8rem' }} >{ comment.author.firstName } { comment. author.lastName}</Typography>
            <Typography sx={{ fontSize: '.9rem' }}>{ comment.text }</Typography>
            <Typography sx={{ fontSize: '.8rem' }} align='right'>{ comment.createdAt }</Typography>
          </Box>
        ))}
        {
          <Box ref={scrollRef}></Box>
        }
      </Box>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex' }} noValidate autoComplete="off">
        <TextField 
          sx={{ flex: 3 }} 
          size='small' 
          id="outlined-basic" 
          label="Comment" 
          variant="outlined" 
          margin="dense" 
          value={commentData.text}
          onChange={event => handleChanges(event)}
        />
        <StyledButton style={styles} clickAction={handleAddComment} text={'Add'}/>
      </Box>
    </Box>
  )
}

export default CommentsLog;