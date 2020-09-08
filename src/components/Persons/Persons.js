import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card ,CardActionArea,CardActions,
  CardContent,Button,Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    robot: {
        display:'inline-block',
        width:'31%',
        backgroundColor:'rgba(235, 25, 10, 0.1)',
        margin:'1%',
        height:'307px'
    },
    
    blog:{
        color:'rgba(158, 11, 158, 0.5)'
    },

    title:{
        color:'rgba(238, 70, 20, 0.6)'
    },
 
    learnBtn:{
        color:'rgba(131, 24, 71, 0.6)',
    },

  }));


 const Persons = (props) => {
      const {title,body,id} = props.persons;

      const history = useHistory()
      const handleClick = (parsonHandle) => {
             history.push(`/parson/${parsonHandle}`);
       }

      const classes = useStyles();

    return (
    
    <Card className={classes.robot}>
        <CardActionArea className={classes.cardActionArea}>
         <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
              {title}
           </Typography>
           <Typography variant="body2" className={classes.blog} component="p">
              {body}
           </Typography>
          </CardContent>
         </CardActionArea>
         <CardActions>
        <Button onClick={() => handleClick(id)} size="small" color="secondary" className={classes.learnBtn}>
        Learn More
      </Button>
     </CardActions>
  </Card>

   );
};

    export default Persons;