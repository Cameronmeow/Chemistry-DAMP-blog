/* eslint-disable no-unused-vars */
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './BlogDetail.css';
// import Navbar from '../navbar/navbar';
// import Footer from '../footer/footer';
// import Comments from '../Comments/Comments';
// import pic1 from "./pic1.jpg";
// import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";

// const BlogDetail = ({ blogs }) => {

//   // const [comments, setComments] = useState([
//   //   { user: 'Jane Doe', text: 'Great blog!' },
//   //   { user: 'John Smith', text: 'Very informative, thanks!' }
//   // ]);

//   const addComment = (text) => {
//     const newComment = { user: 'Current User', text };
//     setComments([...comments, newComment]);
//   };

//   const { id } = useParams();
//   const blog = blogs.find((blog) => blog.id === parseInt(id));
//   const images = [pic1, pic2, pic3];
//   const rand = Math.floor(Math.random() * images.length);
//   const selectedImage = images[rand];
//   return (
//     <>
//           <Navbar/>

//     <div className="blog-detail">
//       {blog ? (
//         <>
//         <img
//               src={selectedImage}
//               alt={blog.title}
//               className="blog-detail-image"
//             />
//           <h2 className="blog-detail-title">{blog.title}</h2>
//           <p className="blog-detail-content">{blog.content}</p>
//           <h2>Course Content</h2>
//           <p className="blog-detail-content">{blog.courseContent}</p>
//           <h2>Difficulty</h2>
//           <p className="blog-detail-content">{blog.difficulty}</p>
//           <h2>Instructor</h2>
//           <p className="blog-detail-content">{blog.Instructor}</p>
//           <h2>Semester</h2>
//           <p className="blog-detail-content">{blog.Semester}</p>
//           <h2>Teaching Style</h2>
//           <p className="blog-detail-content">{blog.TeachingStyle}</p>
//           <h2>Time Commitment Required</h2>
//           <p className="blog-detail-content">{blog.TimeCommitmentRequired}</p>
//           <h2>Grading Policy and Statistics</h2>
//           <p className="blog-detail-content">{blog.GradingPolicyStatistics}</p>
//           <h2>Attendance Policy</h2>
//           <p className="blog-detail-content">{blog.AttendancePolicy}</p>
//           <h2>Evaluation Scheme</h2>
//           <p className="blog-detail-content">{blog.EvaluationScheme}</p>
//       <Comments />
//         </>
//       ) : (
//         <p>Blog not found</p>
//       )}

//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default BlogDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetail.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Comments from "../Comments/Comments";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the blog details from the backend
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/course-reviews/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        setError("Failed to fetch the blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // The effect runs when the ID changes

  const images = [pic1, pic2, pic3];
  const rand = Math.floor(Math.random() * images.length);
  const selectedImage = images[rand];

  return (
    <>
      <Navbar />

      <div className="blog-detail">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : blog ? (
          <>
            <img
              src={selectedImage}
              alt={blog.title}
              className="blog-detail-image"
            />
            <h2 className="blog-detail-title">{blog.title}</h2>
            <p className="blog-detail-content">{blog.description}</p>
            <h2>Course Content</h2>
            <p className="blog-detail-content">{blog.courseContent}</p>
            <h2>Difficulty</h2>
            <p className="blog-detail-content">{blog.difficulty}</p>
            <h2>Instructor</h2>
            <p className="blog-detail-content">{blog.instructor}</p>
            <h2>Semester</h2>
            <p className="blog-detail-content">{blog.semester}</p>
            <h2>Teaching Style</h2>
            <p className="blog-detail-content">{blog.teachingStyle}</p>
            <h2>Time Commitment Required</h2>
            <p className="blog-detail-content">{blog.timeCommitmentRequired}</p>
            <h2>Grading Policy and Statistics</h2>
            <p className="blog-detail-content">
              {blog.gradingPolicyStatistics}
            </p>
            <h2>Attendance Policy</h2>
            <p className="blog-detail-content">{blog.attendancePolicy}</p>
            <h2>Evaluation Scheme</h2>
            <p className="blog-detail-content">{blog.evaluationScheme}</p>
            <Comments blogId={id} />
          </>
        ) : (
          <p>Blog not found</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
