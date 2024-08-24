import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Comments from '../Comments/Comments';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

const BlogDetail = ({ blogs }) => {

  // const [comments, setComments] = useState([
  //   { user: 'Jane Doe', text: 'Great blog!' },
  //   { user: 'John Smith', text: 'Very informative, thanks!' }
  // ]);

  const addComment = (text) => {
    const newComment = { user: 'Current User', text };
    setComments([...comments, newComment]);
  };

  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  const images = [pic1, pic2, pic3];
  const rand = Math.floor(Math.random() * images.length);
  const selectedImage = images[rand];
  return (
    <>
          <Navbar/>

    <div className="blog-detail">
      {blog ? (
        <>
        <img
              src={selectedImage}
              alt={blog.title}
              className="blog-detail-image"
            />
          <h2 className="blog-detail-title">{blog.title}</h2>
          <p className="blog-detail-content">{blog.content}</p>
          <h2>Course Content</h2>
          <p className="blog-detail-content">{blog.courseContent}</p>
          <h2>Difficulty</h2>
          <p className="blog-detail-content">{blog.difficulty}</p>
          <h2>Instructor</h2>
          <p className="blog-detail-content">{blog.Instructor}</p>
          <h2>Semester</h2>
          <p className="blog-detail-content">{blog.Semester}</p>
          <h2>Teaching Style</h2>
          <p className="blog-detail-content">{blog.TeachingStyle}</p>
          <h2>Time Commitment Required</h2>
          <p className="blog-detail-content">{blog.TimeCommitmentRequired}</p>
          <h2>Grading Policy and Statistics</h2>
          <p className="blog-detail-content">{blog.GradingPolicyStatistics}</p>
          <h2>Attendance Policy</h2>
          <p className="blog-detail-content">{blog.AttendancePolicy}</p>
          <h2>Evaluation Scheme</h2>
          <p className="blog-detail-content">{blog.EvaluationScheme}</p>
      <Comments />
        </>
      ) : (
        <p>Blog not found</p>
      )}

    </div>
    <Footer/>
    </>
  );
};

export default BlogDetail;
