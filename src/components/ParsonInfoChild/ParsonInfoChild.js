import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ParsonInfoChild = () => {
      //http://jsonplaceholder.typicode.com/posts/15
      const {parsonId} = useParams()
      const [parsonInfo,setParsonInfo] = useState({})
      const {title,body} =parsonInfo;
      console.log(parsonInfo)
      useEffect(() => {
          fetch(`http://jsonplaceholder.typicode.com/posts/${parsonId}`)
          .then(res => res.json())
          .then(data => setParsonInfo(data))
      },[])

    return (
        <div>
            <h3>title:{title}</h3>
             <h5>{body}</h5>
        </div>
    );
};

export default ParsonInfoChild;