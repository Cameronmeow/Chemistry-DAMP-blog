/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Blog from "../components/blog/blog";
import SideBar from "../components/sidebar/sidebar";
import Announcements from "../components/Annoucements/Announcements";
import InfiniteScroll from "../components/Infinite/Infinite";
import Carousel from "../components/Carousel/Carousel";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import LoginSignupForm from "../components/LoginSignUP/LoginSignupForm";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [recentUploads, setRecentUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch featured blogs
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await axios.get(
          "https://chemistry-damp-blog-new.onrender.com/api/course/featuredReviews"
        );
        console.log(response.data.featuredReviews);
        setFeaturedBlogs(response.data.featuredReviews);
      } catch (err) {
        setError("Failed to fetch featured blogs");
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentUploads = async () => {
      try {
        const response = await axios.get(
          "https://chemistry-damp-blog-new.onrender.com/api/course/getLastFourReviews"
        );
        console.log(response.data);
        const uploads = response.data.map((blog) => ({
          title: `${blog.courseCode} course review added`,
          image: pic1, // Placeholder image for now
          description: `A new review for ${blog.courseCode} has been added.`,
        }));
        setRecentUploads(uploads);
      } catch (err) {
        setError("Failed to fetch recent uploads");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
    fetchRecentUploads();
  }, []);

  const announcements = [
    {
      title: "Updated Curriculum",
      date: "August 5, 2024",
      description:
        "We have released new features in our application. Check them out now!",
    },
    {
      title: "Semex Blogs",
      date: "August 10, 2024",
      description:
        "Scheduled maintenance will occur from 12:00 AM to 4:00 AM. The application may be unavailable during this time.",
    },
    {
      title: "Community Meetup",
      date: "August 15, 2024",
      description:
        "Join us for a community meetup to discuss upcoming events and features.",
    },
  ];

  const images = [pic1, pic2, pic3];
  return (
    <>
      <Navbar />
      <Carousel interval={3000} />
      <Header />

      {/* <LoginSignupForm/> */}
      <InfiniteScroll />
      <h1 className="appTitle">Featured Blogs</h1>
      <div className="appContainer">
        <div className="appblogs">
          <div className="approw">
            {featuredBlogs.map((blog) => (
              <Blog
                key={blog._id}
                id={blog._id}
                name={blog.courseName}
                photo={blog.photo}
                description={blog.courseOverview}
                className="blog-card"
              >
                <h3>{blog.courseName}</h3>
                <p>{blog.courseOverview}</p>
                <button onClick={() => handleReadMore(blog._id)}>
                  Read More
                </button>
              </Blog>
            ))}
          </div>
        </div>
        <div className="side">
          <div className="appside">
            <SideBar items={recentUploads} />
            <Announcements announcements={announcements} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// Function to handle 'Read More' button click
const handleReadMore = (id) => {
  // Redirect to the blog details page
  window.location.href = `/blog/${id}`;
};

export default Home;
