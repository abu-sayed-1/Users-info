import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,Card ,CardActionArea,CardActions,
  CardContent,CardMedia,Button,Typography,Grid
} from '@material-ui/core';
import './Parson.css'

const useStyles = makeStyles((theme) =>({
    robot: {
      display:'inline-block',
      width:'30%',
      backgroundColor:'rgba(235, 25, 10, 0.1)',
      margin:'1%',
      height:'350px'
    },
    cardActionArea:{
      width:'100%',
    },

    blog:{
        color:'rgba(158, 11, 158, 0.5)'
    },

    title:{
     color:'rgba(238, 70, 20, 0.6)'
    },

    mainContainer:{
      display:'inline-block',
      margin:'8px',
    },

    learnBtn:{
      color:'rgba(131, 24, 71, 0.6)'
    },

  }));


const Persons = (props) => {
      const {title,body,id} = props.persons;

      const history = useHistory()
      const handleClick = (parsonHandle) => {
            history.push(`/parson/${parsonHandle}`)
      }
      const classes = useStyles();

    return (
        <Card className={classes.robot}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
        //   component="img"
          alt="User Info"
          height="140"
        //   image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
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