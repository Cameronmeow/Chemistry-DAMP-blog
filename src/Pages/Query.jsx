import React, { useState } from 'react';
import './Query.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const QueryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Query Submitted: \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar/>
      <div className="query-form-container">
        <form className="query-form" onSubmit={handleSubmit}>
          <h2 className="query-form-title">Contact Us</h2>
          <div className="query-form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="query-form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="query-form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="query-form-button">Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default QueryForm;
