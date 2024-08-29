import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ContactCard from "../components/Team/contactcard";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./team.css";

function Team() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <Navbar />
      <div className="contactdiv">
      <h1 className="contact-heading">Meet Our Team</h1>
      <h2 className="contact-subheading">Damp Coordinators {year}-{year%100 + 1} </h2>
      <div className="contactrow">
          
          </div>
      <h2 className="contact-subheading">Mentors</h2>
        
       <ContactCard/>
        </div>
      
      <Footer />
    </>
  );
}

export default Team;
