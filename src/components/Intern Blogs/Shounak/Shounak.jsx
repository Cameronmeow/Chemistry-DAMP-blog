import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./Shounak.css";
import bg from "./Shounak.jpeg";
function Shounak() {
  return (
    <>
      <Navbar />
      <div className="shounak-container">
        <img src={bg} className="shounak-image" />
        <h1 className="shounak-title">Internship Experience: Drip Capital</h1>
        <p className="shounak-intro">
          As a 4th-year Chemistry student at IIT Bombay, my journey has been far
          from conventional. While juggling various responsibilities — from
          positions of responsibility (PORs) to projects — I explored fields
          that seemed distant from my engineering background. College provided
          me with a platform to dive into brainstorming sessions with peers and
          participate in competitions across consulting, product, and finance.
          Through my involvement in clubs like the Finance Club, Racing Team,
          E-Cell, and the Student Alumni Relations Cell (SARC), I discovered my
          passion for solving problems and the thrill of taking ideas from 1 to
          100.
        </p>
        {/* <h2 className="shounak-subtitle">
          Bridging the Gap: The Birth of Eshway
        </h2> */}
        <br />
        <p className="shounak-description">
          I was fortunate enough to undertake multiple internships and research
          projects during my college life. Each internship, from Kotak Private
          and Third Bridge to XLRI Jamshedpur, and finally, Drip Capital, played
          a key role in helping me identify where my true interests lie.
        </p>
        <h2 className="shounak-subtitle">
          A Deep Dive into B2B Lending at Drip Capital
        </h2>
        <p className="shounak-description">
          My most recent internship at Drip Capital, a company specializing in
          efficient working capital solutions for businesses, was especially
          transformative. Although my initial role focused on developing global
          partnerships, I ended up collaborating with teams across Risk, Growth,
          New Initiatives, Marketing, and Sales Enablement. This
          cross-functional exposure allowed me to gain a holistic understanding
          of the business model and the entire B2B lending landscape,
          particularly in the LATAM region.
        </p>
        <h2 className="shounak-subtitle">Key Projects and Contributions</h2>
        <p className="shounak-description">
          One of my primary projects involved identifying new channel
          partnerships by analyzing big data from both our customers and
          third-party sources. The first few weeks were dedicated to
          benchmarking 15+ competitors across various lending solutions to
          understand the B2B lending space thoroughly. A key highlight for me
          was presenting creative, data-driven solutions to the senior
          management, resulting in a robust growth pipeline that significantly
          contributed to Drip Capital’s expansion efforts.
        </p>{" "}
        <h2 className="shounak-subtitle">A Day in the Life at Drip Capital</h2>
        <p className="shounak-description">
          My typical day started with a one-hour commute, arriving at the office
          by 9:30–10:00 AM. Since I worked on the US and Canada markets, many of
          my team members operated remotely or on US hours. I had daily stand-up
          calls with my Director to track progress and strategize for the next
          day. Additionally, I had fortnightly brainstorming sessions with the
          Chief Business Officer, where I worked on ideas he wanted to explore.
        </p>{" "}
        <p className="shounak-description">
          Working from the office was a great experience, as I got to interact
          with people across various teams. Although my work hours were
          flexible, some days required late-night sessions to align with the US
          team. Despite the startup-like vibe, the team was incredibly helpful
          and provided me with increasing autonomy as I gained their trust. me
          to learn the required skills from scratch.
        </p>{" "}
        <h2 className="shounak-subtitle">
          Learning from the Best: Board Meeting Insights
        </h2>
        <p className="shounak-description">
          One of the most memorable experiences during my internship was
          attending a board meeting alongside the senior management team. It was
          eye-opening to discuss the performance of Drip Capital’s India and US
          businesses and brainstorm solutions to tackle challenges. This
          exposure provided me with invaluable insights into strategic
          decision-making and business growth.
        </p>
        <h2 className="shounak-subtitle">Parting Thoughts and Takeaways</h2>
        <p className="shounak-description">
          On my last day at Drip Capital, we had a fun farewell lunch that
          perfectly captured the sense of camaraderie within the company. The
          experience left me with lasting memories and crucial learnings.
        </p>
        <p className="shounak-description">
          One thing I learned is the importance of being open to new ideas and
          going out of your way to connect with people at your firm. My PORs
          helped me break out of my shell during my first year and become more
          confident in expressing my thoughts. Additionally, staying well-read
          is crucial — whether it’s in finance or consulting. I personally used
          YouTube channels like Bloomberg, Business Insider, and GrowthX to
          deepen my business and finance knowledge.
        </p>
        <h2 className="shounak-subtitle">Final Advice to Juniors</h2>
        <p className="shounak-description">
          My biggest advice is to keep learning and not stress too much. It’s
          essential to focus on your basics, be it in finance, consulting, or
          any other field. Preparing for CFA Level 1 and working on various
          projects helped me build a solid foundation in finance. Best of luck
          to everyone, and feel free to reach out if you’d like to chat!
        </p>
        {/* Navigation Buttons */}
      </div>
      <Footer />
    </>
  );
}

export default Shounak;
