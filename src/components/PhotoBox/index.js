import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/components-scss/_photoBox.scss'; 

const PhotoBox = ({ name, title, description, avatar, viewType = 1 }) => {
    return (
        <div className={`photo-box ${viewType === 2 ? 'inner-view' : ''}`}>
            <img src={avatar} alt={name} className={viewType === 2 ? 'user-photo-small' : 'user-photo'} />
            <h2 className={viewType === 2 ? 'user-name-inner' : 'user-name'}>{name}</h2>
            
            {viewType === 1 && (
                <>
                    {title && <p className="user-title">{title}</p>}
                    {description && <p className="user-description">{description}</p>}
                </>
            )}
        </div>
    );
}

PhotoBox.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    viewType: PropTypes.number
};

export default PhotoBox;
