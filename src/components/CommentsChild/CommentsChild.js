import React from 'react';
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
    //  margin:'10px 45px 10px 45px',
     boxShadow:'5px 6px 10px ',
     backgroundColor:'rgba(206, 168, 206, 0.1)'
    },
    blog:{
        color:'rgba(158, 11, 158, 0.5)'
    },
    
  }));

const CommentsChild = (props) => {
    const classes = useStyles();
    const {body,email,name,} = props.comments

    // const [img] = useContext(ImagesContext);
    //  console.log(img)
    // const allImg = img.filter(img => )
    return (
      <section>
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
        </section>
    );
};

export default CommentsChild;