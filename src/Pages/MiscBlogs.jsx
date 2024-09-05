import CurvedCard from "../components/curvedRectangle/curvedRectangle";
import blogs from "./blogData";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./Blogs.css";
import semexpic from "../assets/Blogs/semex.jpeg";
import gradpic from "../assets/Blogs/grad.jpeg";
import internpic from "../assets/Blogs/intern.jpg";


function MiscBlogs() {
  return (
    <>
    <Navbar/>
    <div className="blogContainer">
      <div className="blogColumn">
        <a href="semex" style={{textDecoration:"none"}}><CurvedCard image={semexpic} title="Semex Blogs" /></a>        
      </div>
      <div className="blogColumn">
      <a href="intern" style={{textDecoration:"none"}}><CurvedCard image={internpic} title="Intern Blogs" /></a>
      </div>
      <div className="blogColumn">
      <a href="opportunities" style={{textDecoration:"none"}}><CurvedCard image={gradpic} title="Opportunities" /></a>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default MiscBlogs;
