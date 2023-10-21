import React from 'react';
import '../../assets/styles/components-scss/_info.scss';

const Info = ({ text }) => {
    return (
        <div className="info-container">
            {text}
        </div>
    );
};

export default Info;
