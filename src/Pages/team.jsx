import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ContactCard from "../components/Team/contactcard";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./team.css";
import contactsData from "../components/Team/teamdata";
// function Team() {
//   const d = new Date();
//   let year = d.getFullYear();
//   const dampCoordinators = contactsData.filter(contact => contact.role === 'DAMP Coordinator');
//   const mentors = contactsData.filter(contact => contact.role === 'Mentor');

//   return (
//     <>
//       <Navbar />
//       <div className="contactdiv">
//       <h1 className="contact-heading">Meet Our Team</h1>
//       <h2 className="contact-subheading">Damp Coordinators {year}-{year%100 + 1} </h2>
//       <div className="contactrow">
//           {dampCoordinators.map((coordinator, index) => (
//             <ContactCard key={index} {...coordinator} />
//           ))}
//         </div>
//       <h2 className="contact-subheading">Mentors</h2>
        
//       {mentors.map((mentor, index) => (
//             <ContactCard key={index} {...mentor} />
//           ))}

//         </div>
      
//       <Footer />
//     </>
//   );
// }

// export default Team;
function Team() {
  const d = new Date();
  let year = d.getFullYear();

  // Extract the coordinator (first member) and mentors (all other members)
  const coordinator = contactsData[0];
  const mentors = contactsData.slice(1);

  return (
    <>
      <Navbar />
      <div className="contactdiv">
        <h1 className="contact-heading">Meet Our Team</h1>
        <h2 className="contact-subheading">
          DAMP Coordinators {year}-{year % 100 + 1}
        </h2>

        {/* Display the Coordinator */}
        <div className="contactrow">
          <ContactCard
            name={coordinator.name}
            photo={coordinator.photo}
            bio={coordinator.bio}
            instagram={coordinator.instagram}
            linkedin={coordinator.linkedin}
            email={coordinator.email}
          />
        </div>

        <h2 className="contact-subheading">Mentors</h2>
        <div className="contactrow">
          {/* Display the Mentors */}
          {mentors.map((mentor, index) => (
            <ContactCard
              key={index}
              name={mentor.name}
              photo={mentor.photo}
              bio={mentor.bio}
              instagram={mentor.instagram}
              linkedin={mentor.linkedin}
              email={mentor.email}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;