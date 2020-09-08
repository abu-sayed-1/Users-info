import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container,Card ,CardActionArea,
    CardContent,Typography,Grid
  } from '@material-ui/core';


  const useStyles = makeStyles((theme) =>({

    robot: {
        maxWidth: 345,
        backgroundColor:'rgba(235, 25, 10, 0.1)',
    },
     
    title:{
        color:'rgba(238, 70, 20, 0.6)'
     },

     blog:{
        color:'rgba(158, 11, 158, 0.5)'
  },
    
  }));

const PersonsInfoChild = () => {
  const classes = useStyles();
     const {parsonId} = useParams();
     const [parsonInfo,setParsonInfo] = useState({});
     const {title,body} =parsonInfo;

  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts/${parsonId}`)
     .then(res => res.json())
     .then(data => setParsonInfo(data));
      },[]);

    return (
      
  <Container  className={classes.container}>
    <Grid container spacing={3}>
     <Grid item xs={12} sm={12} md={12}>
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
        </Card>
      </Grid>
      </Grid>
  </Container>
    );
};

export default PersonsInfoChild;