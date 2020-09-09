import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';

const Home = () => {
   const [persons,setPerson] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPerson(data));
       },[]);
         
    return (
         
         <div className='container' style={{marginLeft:'11px'}}>
              {
              persons.map(persons => <Persons key={persons.id} persons={persons}  ></Persons>)

              }
         </div>

     );
  };
  export default Home;