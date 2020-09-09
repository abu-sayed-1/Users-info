import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsChild from '../CommentsChild/CommentsChild';

const Comments = () => {
    const {personId} = useParams();
    const [comments,setComments] = useState([]);
        useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${personId}`)
         .then(res => res.json())
         .then(data => setComments(data));

    },[]);
    
     
    return (
        <div>
           {
               comments.map(comments => <CommentsChild key={comments.id} comments={comments}></CommentsChild>)
           }
        </div>
    );
};

export default Comments;