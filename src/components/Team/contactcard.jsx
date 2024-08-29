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
import contactsData from './teamdata.js';

const ContactCard = ({ name, photo, bio, instagram }) => {
  return (
    <>
  {/* //   <div className="contact-card">
  //   <div className="contact-card-front">
  //     <img src={photo} alt={name} className="contact-photo" />
  //     <h3 className="contact-name">{name}</h3>
  //   </div>
  //   <div className="contact-card-back">
  //     <p className="contact-bio">{bio}</p>
  //     <div>
  //     <a href={instagram} className="contact-instagram" target="_blank" rel="noopener noreferrer">
  //       <FontAwesomeIcon icon={faInstagram}/>
  //     </a>
  //     <a href={instagram} className="contact-instagram" target="_blank" rel="noopener noreferrer">
  //       <FontAwesomeIcon icon={faLinkedin}/>
  //     </a>
  //     <a className="contact-instagram" target="_blank" rel="noopener noreferrer" onClick={() => window.location = 'mailto:debashishdas2428@gmail.com'}><FontAwesomeIcon icon={faEnvelope} /></a>
  //     </div>
  //   </div>
  // </div> */}
    <div className="contact-cards-container">
    {contactsData.map((contact, index) => (
    <div className="contact-card">
      <div className="contact-card-front">
        <img src={contact.photo} alt={contact.name} className="contact-photo" />
        <h3 className="contact-name">{contact.name}</h3>
      </div>
      <div className="contact-card-back">
        <p className="contact-bio">{contact.bio}</p>
        <div>
        <a href={contact.instagram} className="contact-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href={contact.linkedin} className="contact-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a className="contact-instagram" target="_blank" rel="noopener noreferrer" onClick={() => window.location = `mailto:${contact.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    </div>
    ))}
    </div>
    </>
  );
};

export default ContactCard;
