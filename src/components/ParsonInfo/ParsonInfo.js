import React from 'react';
import ParsonInfoChild from '../ParsonInfoChild/ParsonInfoChild';
import Comments from '../Comments/Comments';

const ParsonInfo = () => {
    return (
        <div>
           <h4>This is ParsonInfo</h4>
            <ParsonInfoChild></ParsonInfoChild>
            <Comments></Comments>
        </div>
    );
};

export default ParsonInfo;