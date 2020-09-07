import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,Card ,CardActionArea,CardActions,
  CardContent,CardMedia,Button,Typography,Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({


    robot: {
      maxWidth: 345,
    },
    cardActionArea:{
      width:'100%',
    },
    blog:{
        color:'blue'
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
    <Container  className={classes.container}>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
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
          <Typography gutterBottom variant="h5" component="h2">
          Title:{title}
          </Typography>
          <Typography variant="body2" className={classes.blog} component="p">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button onClick={() => handleClick(id)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
 </Container>


 
    );
};

export default Persons;