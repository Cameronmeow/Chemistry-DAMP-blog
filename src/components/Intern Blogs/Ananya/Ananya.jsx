import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./Ananya.css";
import bg from "./Ananya.jpeg";
function ESHU() {
  return (
    <>
      <Navbar />
      <div className="ananya-container">
        <img src={bg} className="ananya-image" />
        <h1 className="ananya-title">
        My Summer Internship at American Express: A Journey of Growth and Learning
        </h1>
        <p className="ananya-intro">
        This year, I had the privilege of interning at American Express, Gurgaon, as part of the Credit
and Fraud Risk division. From the moment I stepped into the office, the experience lived up to
my expectations in every possible way. The culture, the people, and the overall atmosphere at
Amex truly mesmerized me. We were all assigned a mentor or buddy who guided us through
our tasks, and I was pleasantly surprised by how approachable and eager to help everyone
was. Whether you were a full-time employee or an intern, you could feel the warmth and
friendliness in every interaction. The perks were great too—free food, pick-up and drop-off
services, and the flexibility to work from home. Most teams, including mine, followed a hybrid
model, coming to the office three times a week. These office days gave me a chance to bond
with my team, managers, and other leaders, adding a personal touch to the entire experience.

        </p>
        {/* <h2 className="ananya-subtitle">
          Bridging the Gap: The Birth of Eshway
        </h2> */}
        <br />
        <p className="ananya-description">
        My project at Amex revolved around deriving strategies for sending notifications to customers
who were likely to face declined credit card transactions. The goal was to keep them aware and
help improve their overall experience. What made this project even more exciting was that it
was a live project—meaning the work I was doing had a real impact on customers and wasn’t
just for practice. By the end of my internship, I had the opportunity to present my findings and
proposals to senior leaders, which was a moment of pride for me. Throughout the project, I had
incredible support from my mentor, manager, and the entire team. Their guidance made the
whole journey smooth and fulfilling.
        </p>
        <p className="ananya-description">
        Beyond work, we also had plenty of fun at the office. One Friday, our entire team went to a
game zone for some much-needed relaxation, and we had no work on that day—just pure fun!
We also enjoyed several outings, and my teammates made sure I felt included by inviting me
along for treats and hangouts. . The sense of collaboration across teams at Amex was clear to
see, and I appreciated how easily everyone worked together.

          <p />
          <p className="ananya-description"></p>
          One of the best parts of my internship experience was the friendships I made with other
co-interns—not just from IIT Bombay but from various colleges. We shared a lot of memorable
moments together, including a weekend trip to Rishikesh with all the IIT Bombay interns. These
weekends and hangouts created a strong bond that made the experience even more special.

          <p />
          <p className="ananya-description"></p>Overall, my biggest takeaway from this internship is to never feel overwhelmed when stepping
out of your comfort zone or tackling something new. It might feel unfamiliar at first, but with the
right attitude and enthusiasm, you can learn and grow in ways you didn’t think possible. I’ll
always remember something my manager told me: "We can teach you everything, but we can't
teach you the attitude to learn." So, stay curious, ask questions, and embrace challenges—not
just to solve problems, but to gain knowledge and improve yourself along the way
        </p>
        
        {/* Navigation Buttons */}
      </div>
      <Footer />
    </>
  );
}

export default ESHU;
