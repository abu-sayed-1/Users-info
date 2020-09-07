import React from 'react';
import { Box, CardActions } from '@material-ui/core';

const CommentsChild = (props) => {
    const {body,email,name,} = props.comments
    // const {img} = props.images;
    return (
        <div style={{border:'2px solid purple',margin:'15px',padding:'20px'}}>
            <h4>Name:{name}</h4>
            <h5>Email:{email}</h5>
            <p>comment:{body}</p>
            <CardActions>
            <Box>

           </Box>
            </CardActions>
           
        </div>
    );
};

export default CommentsChild;