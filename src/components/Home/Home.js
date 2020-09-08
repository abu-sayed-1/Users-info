import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';
import { Container, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) =>({
    robot: {
      maxWidth: 345,
      backgroundColor:'rgba(235, 25, 10, 0.1)'
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

const Home = () => {
    const classes = useStyles();
        const [persons,setPerson] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data =>setPerson(data))
        },[])
        return (
                //  <Container  className={classes.container}>
                // <Grid container spacing={3}>
                // <Grid item xs={12} sm={6} md={4}>
                <div>
                {
                    persons.map(persons => <Persons persons={persons}  ></Persons>)
                }
                </div>
                // </Grid>
                // </Grid>
                // </Container>
  );
};
export default Home;