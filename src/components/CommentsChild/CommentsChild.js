import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardActions,Typography } from '@material-ui/core';
// import { ImagesContext } from '../../App';

const useStyles = makeStyles((theme) =>({


    robot: {
      maxWidth: 345,
    },
    cardActionArea:{
      width:'100%',
    
    },
    boxContainer:{
     border:'1px solid purple',
     borderRadius:'10px',
     padding:'10px',
     margin:'10px 45px 10px 45px',
     boxShadow:'5px 6px 10px ',
     backgroundColor:'#A9BCF5'
    },
    blog:{
        color:'purple'
    },
    
  }));

const CommentsChild = (props) => {
    const classes = useStyles();
    const {body,email,name,} = props.comments

    // const {img} = useContext(ImagesContext);
    // console.log(img)

    return (
        <div>
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
           
        </div>
    );
};

export default CommentsChild;