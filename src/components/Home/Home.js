import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';

const Home = () => {
    const [persons,setPerson] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPerson(data))
    },[])
    return (
        <div>
            {
                persons.map(persons => <Persons persons={persons}  ></Persons>)
            }
        </div>
    );
};

export default Home;