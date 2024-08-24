import React, { useState } from 'react';
import './CourseReviews.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
const CourseReviews = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.content) {
      addBlog(formData);
      setFormData({
        title: '',
        author: '',
        content: '',
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="course-reviews-container">
      <h2>Add a New Blog</h2>
      
      <form onSubmit={handleSubmit} className="course-reviews-form">
        <div className="form-group">
          <label htmlFor="title">Author</label>
          <input
            type="text"
            
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            // id="title"
            // name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Course Content</label>
          <input
            type="text"
            // id="author"
            // name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Instructor</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Semester</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Teaching Style</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Time Commitment Required</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Grading Policy and Statistics</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Attendance Policy</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Evaluation Scheme</label>
          <textarea
            // id="content"
            // name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Add Blog</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default CourseReviews;
