/* eslint-disable no-unused-vars */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './bloglist.css';


// const BlogList = ({ blogs }) => {

    
//   return (
//     <div className="blog-list">
//       <h2 className="blog-list-title">All Blogs</h2>
//       {blogs.map((blog, index) => (
//         <div key={index} className="blog-summary">
//           <h3 className="blog-title">{blog.title}</h3>
//           <p className="blog-excerpt">{blog.excerpt}</p>
//           <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './bloglist.css';

// Function to fetch course reviews using Axios
const fetchCourseReviews = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://chemistry-damp-blog-backend.onrender.com/api/course-reviews?page=${page}&limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch reviews', error);
    return [];
  }
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadedBlogIds = new Set(); // To track loaded blog IDs

  const loadMoreBlogs = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newBlogs = await fetchCourseReviews(page, 5);
    // Filter out blogs that are already loaded
    const uniqueBlogs = newBlogs.filter((blog) => !loadedBlogIds.has(blog._id));
    uniqueBlogs.forEach((blog) => loadedBlogIds.add(blog._id)); // Add new blog IDs to the set
    setBlogs((prevBlogs) => [...prevBlogs, ...uniqueBlogs]);
    setPage((prevPage) => prevPage + 1);
    setHasMore(newBlogs.length > 0);
    setLoading(false);
  }, [page, hasMore, loading]);
  
  useEffect(() => {
    loadMoreBlogs();
  }, [loadMoreBlogs]);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMoreBlogs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreBlogs]);

  return (
    <div className="blog-list-container">
    <div className="blog-list">
      <h2 className="blog-list-title">All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-summary">
        <img className="blog-photo" />
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.description}</p>
          <Link to={`/blog/${blog._id}`} className="read-more">Read More</Link>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more blogs to load</p>}
    </div>
    </div>
  );
};

export default BlogList;
