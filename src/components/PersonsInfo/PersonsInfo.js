import React from 'react';
import PersonsInfoChild from '../PersonsInfoChild/PersonsInfoChild';
import Comments from '../Comments/Comments';

const PersonsInfo = () => {
    return (
        <div>
            <PersonsInfoChild></PersonsInfoChild>
            <Comments></Comments>
        </div>
    );
};

export default PersonsInfo;