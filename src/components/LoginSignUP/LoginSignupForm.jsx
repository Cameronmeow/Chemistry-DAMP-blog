/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from "react";
// import "./LoginSignupForm.css";

// const LoginSignupForm = ({ onClose, onLogin }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData, //his updates the state (formData) with the new input value while keeping the existing values of other fields unchanged.
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log("Logging in: ", formData);
//       onLogin(formData.email);
//       onClose();
//     }
//   };

//   return (
//     <div className="login-modal">
//       <div className="form-container">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             ></input>
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {!isLogin && (
//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
//           <button type="submit" className="form-submit-btn">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p onClick={toggleForm} className="toggle-form">
//           {isLogin
//             ? "Don't have an account? Sign Up"
//             : "Already have an account? Login"}
//         </p>
//         <button onClick={onClose} className="close-btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupForm;


import React, { useState } from "react";
import axios from "axios";
import "./LoginSignupForm.css";
import { Navigate } from "react-router-dom";

const LoginSignupForm = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle Login
        const response = await axios.post(
          // "https://chemistry-damp-blog-backend.onrender.com/api/auth/login",
          "http://127.0.0.1:8080/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token); // Store token
        onLogin(response.data.user);
        alert("Successfully logged in");
        onClose();
      } else {
        // Handle Signup
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        const response = await axios.post(
          // "https://chemistry-damp-blog-backend.onrender.com/api/auth/signup",
          "http://127.0.0.1:8080/api/auth/signup",
          {
            fullname: formData.fullname,
            email: formData.email,
            password: formData.password,
          }
        );
        alert(response.data.message);
        toggleForm(); // Switch to login form after successful signup
      }
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="login-modal">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname || ""}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
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
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <button type="submit" className="form-submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
