// // import React, { useEffect, useState } from "react";
// // import axios from "axios"; // Import axios for API calls

// // const Home = () => {
// //   const [featuredBlogs, setFeaturedBlogs] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Fetch featured blogs
// //     const fetchFeaturedBlogs = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://chemistry-damp-blog-backend.onrender.com/api/course-review/featured"
// //         );
// //         setFeaturedBlogs(response.data);
// //       } catch (err) {
// //         setError("Failed to fetch featured blogs");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFeaturedBlogs();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>{error}</div>;

// //   return (
// //     <div>
// //       <h2>Featured Blogs</h2>
// //       {featuredBlogs.length === 0 ? (
// //         <p>No featured blogs available.</p>
// //       ) : (
// //         <div className="blog-list">
// //           {featuredBlogs.map((blog) => (
// //             <div key={blog._id} className="blog-card">
// //               <h3>{blog.title}</h3>
// //               <p>{blog.description}</p>
// //               <button onClick={() => handleReadMore(blog._id)}>
// //                 Read More
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Function to handle 'Read More' button click
// // const handleReadMore = (id) => {
// //   // Redirect to the blog details page
// //   window.location.href = `/blogs/${id}`;
// // };

// // export default Home;

// // -------------------------------------------------------------------------------------
// import { useState } from "react";
// import axios from 'axios';
// import Navbar from "../components/navbar/navbar";
// import Footer from "../components/footer/footer";
// import Header from "../components/header/header";
// import Blog from "../components/blog/blog";
// import blogData from './blogData';
// import SideBar from "../components/sidebar/sidebar";
// import Announcements from "../components/Annoucements/Announcements";
// import InfiniteScroll from "../components/Infinite/Infinite";
// import Carousel from "../components/Carousel/Carousel";
// import pic1 from "./pic1.jpg";
// import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";
// import LoginSignupForm from "../components/LoginSignUP/LoginSignupForm";
// import "./home.css";

// function Home() {
//   const [count, setCount] = useState(0);

//   const recentUploads = [
//     {
//       title: "New Movie Trailer",
//       image: `${pic1}`,
//       description: "Check out the latest trailer for the upcoming movie!",
//     },
//     {
//       title: "Blog Post on React",
//       image: `${pic2}`,
//       description:
//         "Read about the latest tips and tricks in React development.",
//     },
//     {
//       title: "Music Album Release",
//       image: `${pic3}`,
//       description:
//         "Listen to the newly released album by your favorite artist.",
//     },
//   ];

//   const announcements = [
//     {
//       title: "Updated Curriculum",
//       date: "August 5, 2024",
//       description:
//         "We have released new features in our application. Check them out now!",
//     },
//     {
//       title: "Semex Blogs",
//       date: "August 10, 2024",
//       description:
//         "Scheduled maintenance will occur from 12:00 AM to 4:00 AM. The application may be unavailable during this time.",
//     },
//     {
//       title: "Community Meetup",
//       date: "August 15, 2024",
//       description:
//         "Join us for a community meetup to discuss upcoming events and features.",
//     },
//   ];

//   const images = [pic1, pic2, pic3];
//   return (
//     <>
//       <Navbar />
//       <Carousel interval={3000} />
//       <Header />

//       {/* <LoginSignupForm/> */}
//       <InfiniteScroll />
//       <h1 className="appTitle">Featured Blogs</h1>
//       <div className="appContainer">
//         <div className="appblogs">
//           <div className="approw">
//           {blogData.map((blog) => (
//               <Blog
//                 key={blog.id}
//                 id={blog.id}
//                 name={blog.title}
//                 photo={blog.photo}
//                 description={blog.content}

//               />
//             ))}
//             {/* <Blog
//               name="John Doe"
//               photo={pic1}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic2}
//               description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic3}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
//             /> */}
//           </div>
//           {/* <div className="approw">
//             <Blog
//               name="John Doe"
//               photo={pic1}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic2}
//               description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic3}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
//             />
//           </div> */}
//           {/* <div className="approw">
//             <Blog
//               name="John Doe"
//               photo={pic1}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic2}
//               description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic3}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
//             />
//           </div>
//           <div className="approw"> */}
//             {/* <Blog
//               name="John Doe"
//               photo={pic1}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic2}
//               description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
//             />
//             <Blog
//               name="John Doe"
//               photo={pic3}
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
//             />
//           </div> */}
//         </div>
//         <div className="side">
//           <div className="appside">

//             <SideBar items={recentUploads} />
//             <Announcements announcements={announcements} />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Home;
// // -----------------------------------------------------------------------------------------
// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import Navbar from "../components/navbar/navbar";
// // import Footer from "../components/footer/footer";
// // import Header from "../components/header/header";
// // import Blog from "../components/blog/blog";
// // import SideBar from "../components/sidebar/sidebar";
// // import Announcements from "../components/Annoucements/Announcements";
// // import InfiniteScroll from "../components/Infinite/Infinite";
// // import Carousel from "../components/Carousel/Carousel";
// // import pic1 from "./pic1.jpg";
// // import pic2 from "./pic2.jpg";
// // import pic3 from "./pic3.jpg";
// // import "./home.css";

// // function Home() {
// //   const [blogs, setBlogs] = useState([]);
// //   const [recentUploads, setRecentUploads] = useState([]);
// //   const [announcements, setAnnouncements] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchBlogs = async () => {
// //       try {
// //         const response = await axios.get("http://127.0.0.1:8080/api/course-review"); // Adjust the API endpoint as needed
// //         setBlogs(response.data);
// //         console.log(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to load blogs");
// //         setLoading(false);
// //       }
// //     };

// //     fetchBlogs();
// //   }, []);

// //   useEffect(() => {
// //     // Simulate fetching recent uploads and announcements
// //     setRecentUploads([
// //       {
// //         title: "New Movie Trailer",
// //         image: `${pic1}`,
// //         description: "Check out the latest trailer for the upcoming movie!",
// //       },
// //       {
// //         title: "Blog Post on React",
// //         image: `${pic2}`,
// //         description:
// //           "Read about the latest tips and tricks in React development.",
// //       },
// //       {
// //         title: "Music Album Release",
// //         image: `${pic3}`,
// //         description:
// //           "Listen to the newly released album by your favorite artist.",
// //       },
// //     ]);

// //     setAnnouncements([
// //       {
// //         title: "Updated Curriculum",
// //         date: "August 5, 2024",
// //         description:
// //           "We have released new features in our application. Check them out now!",
// //       },
// //       {
// //         title: "Semex Blogs",
// //         date: "August 10, 2024",
// //         description:
// //           "Scheduled maintenance will occur from 12:00 AM to 4:00 AM. The application may be unavailable during this time.",
// //       },
// //       {
// //         title: "Community Meetup",
// //         date: "August 15, 2024",
// //         description:
// //           "Join us for a community meetup to discuss upcoming events and features.",
// //       },
// //     ]);
// //   }, []);

// //   return (
// //     <>
// //       <Navbar />
// //       <Carousel interval={3000} />
// //       <Header />
// //       <InfiniteScroll />
// //       <h1 className="appTitle">Featured Blogs</h1>
// //       <div className="appContainer">
// //         <div className="appblogs">
// //           <div className="approw">
// //             {loading ? (
// //               <p>Loading...</p>
// //             ) : error ? (
// //               <p>{error}</p>
// //             ) : (
// //               blogs.map((blog) => (
// //                 <Blog
// //                   key={blog._id} // Assuming each blog has a unique _id
// //                   id={blog._id}
// //                   name={blog.title}
// //                   photo={blog.photo || pic1} // Fallback to default if photo is missing
// //                   description={blog.content}
// //                 />
// //               ))
// //             )}
// //           </div>
// //         </div>
// //         <div className="side">
// //           <div className="appside">
// //             <SideBar items={recentUploads} />
// //             <Announcements announcements={announcements} />
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Home;
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
import "./home.css";

function Home() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const recentUploads = [
    {
      title: "New Movie Trailer",
      image: `${pic1}`,
      description: "Check out the latest trailer for the upcoming movie!",
    },
    {
      title: "Blog Post on React",
      image: `${pic2}`,
      description:
        "Read about the latest tips and tricks in React development.",
    },
    {
      title: "Music Album Release",
      image: `${pic3}`,
      description:
        "Listen to the newly released album by your favorite artist.",
    },
  ];

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

  useEffect(() => {
    // Fetch the featured blogs from the backend
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await axios.get(
          "https://chemistry-damp-blog-backend.onrender.com/api/course-review/featured"
        );
        // console.log(response.data);
        setFeaturedBlogs(response.data);
        // setFeaturedBlogs(response);
        console.log(featuredBlogs);
      } catch (err) {
        setError("Failed to fetch featured blogs");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <Carousel interval={3000} />
      <Header />

      <InfiniteScroll />
      <h1 className="appTitle">Featured Blogs</h1>
      <div className="appContainer">
        <div className="appblogs">
          <div className="approw">
            {featuredBlogs.map((blog) => (
              <Blog
                key={blog._id}
                id={blog._id}
                name={blog.title}
                photo={blog.photo || pic1} // Use a default image if none is provided
                description={blog.description}
              />
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

export default Home;
