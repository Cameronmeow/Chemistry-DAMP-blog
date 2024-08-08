import CurvedCard from "../components/curvedRectangle/curvedRectangle";
import blogs from "./blogData";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./Blogs.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

function MiscBlogs() {
  return (
    <>
    <Navbar/>
    <div className="blogContainer">
      <div className="blogColumn">
        <a href="testimonials" style={{textDecoration:"none"}}><CurvedCard image={pic1} title="Semex Blogs" /></a>
        
      </div>
      <div className="blogColumn">
      <a href="intern" style={{textDecoration:"none"}}><CurvedCard image={pic2} title="Intern Blogs" /></a>
        
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default MiscBlogs;
