import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css';


const BlogList = ({ blogs }) => {

    
  return (
    <div className="blog-list">
      <h2 className="blog-list-title">All Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="blog-summary">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
          <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
