/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./bloglist.css";

// Function to fetch course reviews using Axios
const fetchCourseReviews = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://chemistry-damp-blog-new.onrender.com/api/course/getAllReviews?page=${page}&limit=${limit}`
    );
    return response.data.reviews;
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    return [];
  }
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadedBlogIds] = useState(new Set()); // To track loaded blog IDs

  const loadMoreBlogs = useCallback(async () => {
    if (loading || !hasMore) return; // Prevent multiple calls while loading or when there are no more blogs
    setLoading(true);
    const newBlogs = await fetchCourseReviews(page, 5);

    // Filter out blogs that are already loaded
    const uniqueBlogs = newBlogs.filter((blog) => !loadedBlogIds.has(blog._id));
    uniqueBlogs.forEach((blog) => loadedBlogIds.add(blog._id)); // Add new blog IDs to the set

    setBlogs((prevBlogs) => [...prevBlogs, ...uniqueBlogs]);
    setPage((prevPage) => prevPage + 1);
    setHasMore(newBlogs.length > 0); // If no new blogs, set hasMore to false
    setLoading(false);
  }, [page, hasMore, loading, loadedBlogIds]);

  useEffect(() => {
    loadMoreBlogs(); // Initial load
  }, []);

  // Infinite scroll logic with throttling (debouncing)
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;

      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = document.documentElement.offsetHeight - 100; // Trigger 100px before reaching bottom

      if (scrollPosition >= threshold) {
        loadMoreBlogs(); // Load more when near the bottom
      }
    };

    // Debounce scroll event handling for better performance
    const debounceScroll = debounce(handleScroll, 200);

    window.addEventListener("scroll", debounceScroll);
    return () => window.removeEventListener("scroll", debounceScroll);
  }, [loading, hasMore, loadMoreBlogs]);

  // Debounce function to limit how often the scroll handler is called
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  return (
    <div className="blog-list-container">
      <div className="blog-list">
        <h2 className="blog-list-title">All Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-summary">
            <img
              className="blog-photo"
              src={blog.photoUrl}
              alt={blog.courseName}
            />
            <h3 className="blog-title">
              {blog.courseCode}: {blog.courseName}
            </h3>
            <Link to={`/blog/${blog._id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more blogs to load</p>}
      </div>
    </div>
  );
};

export default BlogList;
