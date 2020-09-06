import React from 'react';

const CommentsChild = (props) => {
    const {body,email,name} = props.comments
    return (
        <div style={{border:'2px solid purple',margin:'15px',padding:'20px'}}>
            <h4>Name:{name}</h4>
            <h5>Email:{email}</h5>
            <p>comment:{body}</p>
        </div>
    );
};

export default CommentsChild;