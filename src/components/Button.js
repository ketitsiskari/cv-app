import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/Button.scss';

const Button = ({ icon, text }) => {
  return (
    <button className="button">
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  );
};

export default Button;
