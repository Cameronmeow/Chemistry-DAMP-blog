import "./footer.css";
import logo from "./logo_basic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <Announcements/> */}
      <div className="footersmp">
        <div className="container">
        <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo" /> {/* Replace 'logo.png' with your logo path */}
      </div>

      {/* Made by and Copyright Section */}
      <div className="footer-info">
        
        <p>&copy; {new Date().getFullYear()} SMP. All rights reserved.</p>
      </div>

      {/* Quick Links Section */}
      <div className="footer-links">
        <a className="footer-button" href="/" style= {{textDecoration:"none"}}>Home</a>
        <a className="footer-button" href="/team" style= {{textDecoration:"none"}}>Team</a>
        <a className="footer-button" href= "/courses" style= {{textDecoration:"none"}}>Course Reviews</a>
        <a className="footer-button" href= "/resources" style= {{textDecoration:"none"}}>Resources</a>
        <a className="footer-button" href= "/misc" style= {{textDecoration:"none"}}>Blogs</a>
      </div>

      {/* Issues Section */}
      <div className="footer-issues">
        <h3>Have an Issue?</h3>
        <button className="footer-email-button" onClick={() => window.location.href = "mailto:damp.chemistry@gmail.com"}>Email Us Here</button>
      </div>
    </footer>
    <footer class="d-flex flex-wrap justify-content-between align-items-center border-top border-black">
            <div class="col-md-4 d-flex align-items-center">
              <span class="mb-3 mb-md-0 " style={{fontSize:"0.9em"}}>
                Made with ❤️ SMP Web Team & Chemistry DAMP team
              </span>
            </div>
            {/* <p class="mb-3 mb-md-0 ">© {year} Student Mentor Program </p> */}
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex footerItems">
              <li class="m-3">
                <a class="" href="https://www.instagram.com/smp.iitb/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li class="m-3">
                <a class="" href="https://www.facebook.com/smpiitb">
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li class="m-3">
                <a class="" href="">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
