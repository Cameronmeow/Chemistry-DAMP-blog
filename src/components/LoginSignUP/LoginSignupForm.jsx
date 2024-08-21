import React from 'react';
import { useState } from 'react';
import './LoginSignupForm.css';

const LoginSignupForm = ({onClose, onLogin})=>{
  const [isLogin,setIsLogin] = useState(true);
  const [formData,setFormData] = useState({
    email: '',
    password:'',
    confirmPassword: '',
  });

  const toggleForm = () =>{
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, //his updates the state (formData) with the new input value while keeping the existing values of other fields unchanged. 
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLogin){
      console.log('Logging in: ', formData);
      onLogin(formData.email);
      onClose();
    }
  };


  return (
    <div className="login-modal">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value = {formData.email} onChange={handleChange} required></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type="password"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />
            </div>
          )}
          <button type = 'submit'  className='form-submit-btn'>
              {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
        <button onClick={onClose} className='close-btn'>Close</button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
