import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container,Card ,CardActionArea,
    CardContent,CardMedia,Typography,Grid
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
const ParsonInfoChild = () => {
    
    const classes = useStyles();
      const {parsonId} = useParams()
      const [parsonInfo,setParsonInfo] = useState({})
      const {title,body} =parsonInfo;

      useEffect(() => {
          fetch(`http://jsonplaceholder.typicode.com/posts/${parsonId}`)
          .then(res => res.json())
          .then(data => setParsonInfo(data))
      },[])

    return (
        <div>
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
    </Card>
        </Grid>
    </Grid>
 </Container>
        </div>
    );
};

export default ParsonInfoChild;