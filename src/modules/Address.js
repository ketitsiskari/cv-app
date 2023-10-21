import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/components-scss/_address.scss';

function Address(props) {
  return (
    <div className="address">
      <a className="contact-item" href={`tel:${props.phoneNumber}`}>
        <FontAwesomeIcon className="icon" icon={faPhone} />
        <span className='bold'>{props.phoneNumber}</span>
      </a>
      <a className="contact-item" href={`mailto:${props.email}`}>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <span className='bold'>{props.email}</span>
      </a>
      <div className="social-icons">
        <div className="social-item">
        <a href={props.linkedInUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            <div className='title'>LinkedIn</div>
            <div>{props.linkedInUrl}</div>
        </a>
        </div>
        <div className="social-item">
          <a href={props.facebookUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            <p className='title'>Facebook</p>
            <span>{props.facebookUrl}</span>
          </a>
        </div>
        <div className="social-item">
          <a href={`skype:${props.skypeUsername}?chat`}>
            <FontAwesomeIcon icon={faSkype} />
            <p className='title'>Skype</p>
            <span>{props.skypeUsername}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Address;
