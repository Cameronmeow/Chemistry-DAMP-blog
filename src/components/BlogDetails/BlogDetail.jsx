/* eslint-disable no-unused-vars */
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
    // Fetch the course review details from the backend
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://chemistry-damp-blog-new.onrender.com/api/course/getReview/${id}`
        );
        console.log(response.data);
        setBlog(response.data.courseReview);
      } catch (error) {
        setError("Failed to fetch the blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Fetch again if the ID changes

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
              alt={blog.courseName}
              className="blog-detail-image"
            />
            <h2 className="blog-detail-title">{blog.courseName}</h2>
            <p className="blog-detail-content">
              <strong>Course Code: </strong>
              {blog.courseCode}
            </p>
            <p className="blog-detail-content">
              <strong>Semester & Year: </strong>
              {blog.semesterAndYearOfCompletion}
            </p>
            <p className="blog-detail-content">
              <strong>Credits: </strong>
              {blog.numberOfCredits}
            </p>
            <h3>Instructor</h3>
            <p className="blog-detail-content">{blog.courseInstructor}</p>

            <h3>Course Overview</h3>
            <p className="blog-detail-content">{blog.courseOverview}</p>

            <h3>Course Material Difficulty</h3>
            <p className="blog-detail-content">
              {blog.courseMaterialDifficultyRating}/10
            </p>

            <h3>Exam & Grading Difficulty</h3>
            <p className="blog-detail-content">
              {blog.examDifficultyGradingDifficulty}/10
            </p>

            <h3>Attendance Policy</h3>
            <p className="blog-detail-content">{blog.attendancePolicy}</p>

            <h3>Teaching Mode</h3>
            <p className="blog-detail-content">{blog.modeOfTeaching}</p>

            <h3>Exam Experience</h3>
            <p className="blog-detail-content">{blog.examExperience}</p>

            <h3>Assignments or Projects</h3>
            <p className="blog-detail-content">{blog.assignmentOrProjects}</p>

            <h3>Tips for Future Chemists</h3>
            <p className="blog-detail-content">{blog.tipsForFutureChemists}</p>

            <h3>Additional Resources</h3>
            <p className="blog-detail-content">{blog.resources}</p>

            {/* Comments Component */}
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
