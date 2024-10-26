import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./Sanaa.css";
import one from "./Sanaa2.png";
import two from "./Sanaa3.png";
import three from "./Sanaa1.png";
function SANAA() {
  return (
    <>
      <Navbar />
      <div className="phd-container">
        <img src={one} className="phd-image" />
        <h1 className="phd-title">
          IDDDP, Internships, and More: A Journey of Growth
        </h1>

        <p className="phd-description">
          I find myself on a late-night flight from Mumbai to Jaipur, a journey
          I’ve taken countless times before, but this time, there’s no return
          ticket. As I sit here, reflecting on my years at the institute,
          memories flood back, year by year, moment by moment. I’ve been asked
          to write about anything I want, and as I sift through my thoughts, two
          significant experiences from the past year stand out: opting for the
          Inter-Disciplinary Dual Degree Program (IDDDP) and my internship in
          Taiwan.
        </p>
        <p className="phd-description">
          Choosing the IDDDP was a decision rooted in a long-held dream to
          become a physics researcher, while my time in Taiwan was an experience
          that began with nervous anticipation and ended with a newfound sense
          of confidence.
        </p>
        <p className="phd-description">
          SI know that many students in the Chemistry department aren’t
          particularly fond of the subject but end up in the program anyway. My
          story is a little different. I’ve always enjoyed studying and secretly
          aspired to join a lab and be part of the research community. After
          returning from my third-year research internship at Indiana
          University, I decided to pursue this dream by transferring to the
          Physics department, focusing on quantum information theory.
        </p>
        <img src={two} className="phd-image" style={{margin:"0"}} />
        <h2 className="phd-subtitle" style={{color:"black" , padding:"0px", margin:"0px", marginBottom:"10px" , fontSize:"1.5em" , backgroundColor:"wheat"}}>Busy roads of Taiwan</h2>
        <p className="phd-description">
          This was also the time when my friends were gearing up for placements.
          I wasn’t interested in a job, but it was hard not to be distracted by
          the buzz around those impressive salary packages. I realized I needed
          more time to figure out my path. A research career didn’t promise a
          comfortable lifestyle in the immediate future, while a corporate job
          seemed to lack a deeper purpose. I was caught between the fear of
          financial insecurity as a PhD student and the potential
          dissatisfaction of crunching numbers just for a paycheck.
        </p>
        <p className="phd-description">
          To buy myself more time, I decided to pursue a second Master’s degree.
          I reached out to Professor Himadri Dhar from the Physics department,
          who agreed to be my supervisor. With his guidance, I navigated the
          curriculum transition smoothly, despite the lack of seniors who had
          made a similar switch from Chemistry to Physics.
        </p>
        <p className="phd-description">
          By the start of my eighth semester, I was eager for another
          internship, preferably in a corporate setting this time. My previous
          internship had been research-focused, so I wanted to gain experience
          in a research and development role within the quantum computing
          industry. This would allow me to keep my options open for both
          academic and corporate careers. That’s when I discovered BTQ
          Technologies Corp., a Taiwan-based company specializing in
          post-quantum cryptography and decentralized finance applications using
          quantum computing. I reached out to the CEO on LinkedIn, and to my
          delight, I was invited for an interview. Soon after, I found myself
          preparing for a two-month corporate internship in Taipei City.
        </p>
        <img src={three} className="phd-image" style={{margin:"0"}}/>
        <h2 className="phd-subtitle" style={{color:"black" , padding:"0px", margin:"0px", marginBottom:"10px" , fontSize:"1.5em", backgroundColor:"wheat"}}>View from the BTQ office building</h2>
        <p className="phd-description">
          While the prospect was thrilling, the days leading up to my departure
          were filled with anxiety. I was traveling alone, without any friends
          or acquaintances, and Taiwan’s predominantly Chinese-speaking
          population added to my apprehension. However, the two months I spent
          in Taiwan turned out to be peaceful and rewarding. The country’s
          beauty left a lasting impression on me, and despite being in a foreign
          land, I never felt unsafe. I lived alone, navigated the subway, and
          explored beaches and nightclubs with the locals.
        </p>
        <p className="phd-description">
          One of the most memorable moments was my birthday celebration,
          organized by a colleague who had become a dear friend. She surprised
          me with a party, inviting her friends to make the day special. That
          day, I felt immense gratitude for the life I was living—a life where I
          was thriving in a new country, surrounded by people who made me feel
          valued.
        </p>
        <p className="phd-description">
          During my internship at BTQ, I worked on several projects, including
          studying consensus protocols in blockchains using quantum-enabled
          nodes in decentralized networks. I collaborated with professors and
          researchers from Australia and reported directly to the COO, as I was
          the only English speaker in the Taipei office. Towards the end of my
          internship, I was offered an extension on my contract, allowing me to
          continue my projects while pursuing my studies back in India.
        </p>
        <p className="phd-description">
          Reflecting on these experiences, I realize how much they’ve shaped me.
          The IDDDP gave me the academic freedom to explore my passion, while my
          internship in Taiwan challenged me to step out of my comfort zone and
          grow both personally and professionally. As I close this chapter of my
          life, I look forward to the future with a clearer sense of purpose and
          a stronger belief in myself.
        </p>
       
        {/* Navigation Buttons */}
      </div>
      <Footer />
    </>
  );
}

export default SANAA;
