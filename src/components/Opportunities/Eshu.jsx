import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./Eshu.css";
import bg from "./eshu2.jpeg";
function ESHU() {
  return (
    <>
      <Navbar />
      <div className="eshu-container">
        <img src={bg} className="eshu-image" />
        <h1 className="eshu-title">
          From Curiosity to Creation: My Journey in Tech Entrepreneurship
        </h1>
        <p className="eshu-intro">
          My journey with technology began at a young age, fueled by a deep
          curiosity about how things worked. I spent countless hours
          disassembling gadgets around the house, trying to understand their
          mechanics. This early fascination naturally evolved into exploring
          digital realms—whether it was diving into video games or experimenting
          with building simple websites. The excitement of creating something
          from scratch and watching it come to life ignited a passion that would
          shape my future in technology and digital services.
        </p>
        <h2 className="eshu-subtitle">Bridging the Gap: The Birth of Eshway</h2>
        <p className="eshu-description">
          The desire to solve real-world problems and make a tangible impact
          motivated me throughout my journey. By my second year at IIT Bombay, I
          had started freelancing, offering digital services such as web and app
          development. This experience not only honed my technical skills but
          also gave me financial independence—I was able to cover my college
          fees through my freelance work.
          <br />
          However, I soon noticed a significant gap: many startups struggled
          with their digital presence due to the lack of affordable professional
          tech teams. This observation led to the inception of Eshway, a startup
          dedicated to providing comprehensive digital services. Our mission was
          clear: to empower startups by offering website development,
          application development, UI/UX design, and video editing services, all
          at a price point that wouldn’t break the bank.
        </p>
        <h2 className="eshu-subtitle">Skills That Drove Success</h2>
        <p className="eshu-description">
          Starting Eshway required a blend of both technical and non-technical
          skills. On the technical side, I immersed myself in web development,
          mastering languages like HTML, CSS, JavaScript, and frameworks such as
          React and Next.js. Understanding UI/UX principles was equally crucial,
          as it enabled me to create intuitive, user-friendly interfaces.
          <br />
          However, running a startup is much more than just technical know-how.
          I had to quickly develop project management skills to keep everything
          on track, learn effective client communication to meet their needs,
          and build leadership skills to inspire and guide my team. Every day
          presented new challenges and learning opportunities, reinforcing the
          importance of being adaptable and continually acquiring new skills in
          the world of tech entrepreneurship.
        </p>
        <h2 className="eshu-subtitle">Overcoming Challenges Along the Way</h2>
        <p className="eshu-description">
          Building Eshway wasn’t without its challenges. One of the biggest
          hurdles was balancing quality with affordability. In the early days, I
          was determined to offer services that matched the quality of big tech
          companies but at a fraction of the cost. This often meant working late
          into the night to ensure every project met our high standards.
          <br />
          Another challenge was earning the trust of clients. As a new startup,
          many potential clients were hesitant to entrust us with their tech
          needs. To overcome this, I focused on delivering exceptional work and
          building strong relationships with each client. Over time, word of
          mouth became our strongest marketing tool.
          <br />
          Finding the right team was also crucial. It took time to assemble a
          group of talented, like-minded individuals who shared my vision and
          commitment. But once we did, it made all the difference in how we
          operated and grew as a company.
        </p>
        <h2 className="eshu-subtitle">
          A Humorous Incident: Mistaken Identity
        </h2>
        <p className="eshu-description">
          One of the funniest moments during this journey happened during a
          recruitment visit to Atlas University in Mumbai. Given our young
          appearance, it’s common for people to mistake us for students rather
          than professionals. Upon arriving at the university, the security
          guard assumed we were students and asked for our ID cards. Just as we
          tried to explain, the placement team coordinator arrived and clarified
          our purpose there as recruiters, not students. The security guard’s
          shocked expression was priceless.
          <br />
          But the confusion didn’t end there. When we reached the room where the
          placement process was taking place, another staff member told us to
          wait until our names were called, thinking we were there for
          interviews. Once again, the coordinator had to step in and clarify
          that we were the interviewers, not the candidates. The sudden shift in
          how we were addressed—from students to “sir” and “ma’am”—was hilarious
          and a reminder that appearances can be deceiving.
        </p>
        <h2 className="eshu-subtitle">Looking Ahead: The Future of Eshway</h2>
        <p className="eshu-description">
          We’re on the brink of an exciting new chapter at Eshway. One of our
          most ambitious projects is the launch of our Live Tracking Dashboard,
          which we believe is the first of its kind globally. This dashboard
          will revolutionize client interaction, allowing them to monitor
          project progress in real-time without the need for constant updates.
          <br />
          To bring this vision to life, we’re planning to raise funds, which
          will accelerate development, expand our capabilities, and allow us to
          reach more clients faster. Our goal is not just to launch this
          dashboard but to set a new industry standard in client communication
          and project transparency. The future is bright, and we’re eager to
          push the boundaries of what’s possible in digital service delivery.
        </p>
        <h2 className="eshu-subtitle">
          Final Thoughts: Advice for Aspiring Entrepreneurs
        </h2>
        <p className="eshu-description">
          If there’s one thing I’ve learned, it’s that success in tech
          entrepreneurship requires a combination of passion, persistence, and
          continuous learning. The tech world is constantly evolving, and
          staying relevant demands a commitment to lifelong learning. Don’t be
          afraid to take risks or face failures—each setback is an opportunity
          to learn and grow.
          <br />
          Surround yourself with a supportive team and community, and don’t
          hesitate to seek out mentors who can guide you. Enjoy the process,
          celebrate the small victories, and always keep your long-term goals in
          sight. Remember, the journey is just as important as the destination.
        </p>
        {/* Navigation Buttons */}
      </div>
      <Footer />
    </>
  );
}

export default ESHU;
