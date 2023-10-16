import React from 'react';
import '../assets/styles/PhotoBox.scss'

const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="photo-box">
      <div className="crop-photo">
        <img src={avatar} alt="User" />
      </div>
      <div className="name">{name}</div>
      {title && <div className='title'>{title}</div>}
      {description && <div className="description">{description}</div>}
    </div>
  );
};

export default PhotoBox;
