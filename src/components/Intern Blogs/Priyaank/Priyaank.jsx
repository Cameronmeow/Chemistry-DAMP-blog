import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./Priyaank.css";
import bg from "./Priyaank.jpeg";
function Priyaank() {
  return (
    <>
      <Navbar />
      <div className="priyaank-container">
        <img src={bg} className="priyaank-image" />
        <h1 className="priyaank-title">
          Internship Experience: True Beacon
        </h1>
        <p className="priyaank-intro">
          Hi, I’m Priyaank, a 4th-year student from the Chemistry Department.
          Like many others in the department, I’ve found myself drawn more
          towards areas outside of chemistry :) My interest lies in finance, and
          I’ve been lucky enough to complete a few internships in the field. But
          honestly, it hasn’t always been finance—I had the chance to explore
          other fields like consulting and product management through projects
          and internships before realizing they weren’t quite for me.
        </p>
        {/* <h2 className="priyaank-subtitle">
          Bridging the Gap: The Birth of Eshway
        </h2> */}
        <p className="priyaank-description">
          More recently, I interned at a quantitative research firm where I
          worked with machine learning, and that experience sparked my curiosity
          about AI/ML as well. For anyone just starting out in finance, I’d
          recommend Zerodha Varsity as the best place to begin. Once you’ve
          built a foundation, YouTube can be a great resource to further deepen
          your understanding. Back when I started, tools like ChatGPT weren’t
          around, and I often found myself stuck with questions like, “Why is
          this expense in this part of the balance sheet?” It wasn’t easy to
          find answers. Now, with tools like ChatGPT, you can clear up those
          doubts much more quickly, so I’d say make full use of it—because
          others surely will!
        </p>
        <p className="priyaank-description">
          One piece of advice I’d like to share is to genuinely enjoy what
          you’re doing. If you’re working on something personal, like building
          your own trading strategy or a custom LLM, you’ll put in a lot more
          effort than if you’re just doing a project for the sake of it. So, try
          to choose projects that have practical applications and trust the
          process—you’ll learn a lot from it.
          </p >
          <p className="priyaank-description">
          Best of luck to everyone, and I’d love to chat sometime if anyone’s
          interested!
          </p >
          
        {/* Navigation Buttons */}
      </div>
      <Footer />
    </>
  );
}

export default Priyaank;
