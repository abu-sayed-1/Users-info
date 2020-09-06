import React from 'react';
import { useHistory } from 'react-router-dom';

const Persons = (props) => {
    const {title,body,id} = props.persons
    // console.log(props)
    const history = useHistory()
    const handleClick = (parsonHandle) => {

           history.push(`/parson/${parsonHandle}`)
    }
    return (
        <div>
            <h3>Title:{title}</h3>
            <p>{body}</p>
            <button onClick={() => handleClick(id)}>Red More</button>
        </div>
    );
};

export default Persons;