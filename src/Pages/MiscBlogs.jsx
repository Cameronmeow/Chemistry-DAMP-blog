import CurvedCard from "../components/curvedRectangle/curvedRectangle";
import blogs from "./blogData";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./MiscBlogs.css";

function MiscBlogs() {
  return (
    <>
      <Navbar />
      <div className="miscblogContainer">
        <div className="miscblogColumn">
          <a href="semex" style={{ textDecoration: "none" }}>
            <CurvedCard image="/assets/Blogs/semex.jpeg" title="Semex Blogs" />
          </a>
        </div>
        <div className="miscblogColumn">
          <a href="intern" style={{ textDecoration: "none" }}>
            <CurvedCard image="/assets/Blogs/intern.jpg" title="Intern Blogs" />
          </a>
        </div>
        <div className="miscblogColumn">
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
