import { useState } from "react";
import BlogList from "../components/BlogList/Bloglist";
import CurvedCard from "../components/curvedRectangle/curvedRectangle";
import blogs from "./blogData";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import './Blogs.css'
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
function Blogs() {
  const [blogList] = useState(blogs);
  return (
    <>
    
      <Navbar />
      <div className="blogContainer">
        <div className="blogColumn">
          <CurvedCard image={pic1} title="Chemistry" />
          <CurvedCard image={pic2} title="HS" />
          <CurvedCard image={pic3} title="Electrical" />
        </div>
        <div className="blogColumn">
          <CurvedCard image={pic1} title="Maths" />
          <CurvedCard image={pic2} title="IEOR" />
          <CurvedCard image={pic3} title="GNR" />
        </div>
        <div className="blogColumn">
          <CurvedCard image={pic1} title="Physics" />
          <CurvedCard image={pic2} title="CS" />
          <CurvedCard image={pic3} title="MEMS" />
        </div>
      </div>
      <BlogList blogs={blogList} />
      <Footer />
    </>
  );
}

export default Blogs;
