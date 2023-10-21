import React from 'react';
import '../assets/styles/components-scss/_box.scss';

const Box = ({ title, content }) => {
    return (
        <div className="box-container">
            <h2 className="box-title">{title}</h2>
            <p className="box-content">{content}</p>
        </div>
    );
}

export default Box;