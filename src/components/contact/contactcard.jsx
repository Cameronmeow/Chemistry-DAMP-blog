import React from 'react';
import './contactcard.css';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const ContactCard = ({ name, photo, bio, instagram }) => {
  return (
    <div className="contact-card">
      <div className="contact-card-front">
        <img src={photo} alt={name} className="contact-photo" />
        <h3 className="contact-name">{name}</h3>
      </div>
      <div className="contact-card-back">
        <p className="contact-bio">{bio}</p>
        <div>
        <a href={instagram} className="contact-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href={instagram} className="contact-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="contact-instagram" target="_blank" rel="noopener noreferrer" onClick={() => window.location = 'mailto:debashishdas2428@gmail.com'}><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
