import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardActions,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({

    robot: {
      maxWidth: 345,
    },
   
    boxContainer:{
        border:'1px solid purple',
        borderRadius:'15px',
        padding:'10px',
        marginTop:'20px',
        boxShadow:'3px 3px 5px rgba(276, 169, 206, 0.4) ',
        backgroundColor:'rgba(235, 25, 10, 0.2)'
    },

    blog:{
        color:'rgba(158, 11, 158, 0.5)'
    },
    
  }));

    const CommentsChild = (props) => {
          const classes = useStyles();
          const {body,email,name,} = props.comments;

    return (
        <CardActions>
           <Box className={classes.boxContainer}>
             <Typography variant="body2" className={classes.blog} component="p">
                Name:{name}
              </Typography>
              <Typography variant="body2" className={classes.blog} component="p">
                Email:{email}
             </Typography>
             <Typography variant="body2" className={classes.blog} component="p">
              {body}.....
           </Typography>
          </Box>
        </CardActions>

    );
};

export default CommentsChild;