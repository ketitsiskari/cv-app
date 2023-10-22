import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/components-scss/_button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, text, onClick, className }) => {
    return (
        <button onClick={onClick} className={`custom-button ${className}`}>
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {text && <span className="button-text">{text}</span>}
        </button>
    );
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string
};

export default Button;

