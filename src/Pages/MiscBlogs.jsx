import CurvedCard from "../components/curvedRectangle/curvedRectangle";
import blogs from "./blogData";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./Blogs.css";

function MiscBlogs() {
  return (
    <>
      <Navbar />
      <div className="blogContainer">
        <div className="blogColumn">
          <a href="semex" style={{ textDecoration: "none" }}>
            <CurvedCard image="/assets/Blogs/semex.jpeg" title="Semex Blogs" />
          </a>
        </div>
        <div className="blogColumn">
          <a href="intern" style={{ textDecoration: "none" }}>
            <CurvedCard image="/assets/Blogs/intern.jpg" title="Intern Blogs" />
          </a>
        </div>
        <div className="blogColumn">
          <a href="opportunities" style={{ textDecoration: "none" }}>
            <CurvedCard
              image="/assets/Blogs/grad.jpeg"
              title="Opportunities"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MiscBlogs;
