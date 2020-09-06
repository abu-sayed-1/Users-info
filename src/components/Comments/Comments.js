import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsChild from '../CommentsChild/CommentsChild';

const Comments = () => {
    const {parsonId} = useParams()
    const [comments,setComments] = useState([])
    console.log(comments)

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments/?postId=${parsonId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
           <h4>This is Comments</h4> 
           {
               comments.map(comments => <CommentsChild comments={comments}></CommentsChild>)
           }
        </div>
    );
};

export default Comments;