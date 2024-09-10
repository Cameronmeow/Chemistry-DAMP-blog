/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faSmile, faMessage, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
import axios from "axios"; // For API requests
// import { useHistory } from "react-router-dom";

function FAQ() {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    // Fetch FAQ data from the backend
    const fetchFAQs = async () => {
      try {
        const response = await axios.get("https://chemistry-damp-blog-new.onrender.com/api/FAQs/getAllFAQs"); // Adjust endpoint as needed
        console.log(response.data);
        setFaqData(response.data.FAQs);
        // console.log(faqData);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    // Check if the user is an admin
    const checkAdmin = () => {
      const userRole = localStorage.getItem("role"); // Assuming role is stored in localStorage
      setIsAdmin(userRole === "admin");
    };

    fetchFAQs();
    checkAdmin();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAddFAQ = () => {
    history.push("/add-faq"); // Redirect to the add FAQ page
  };

  const handleEditFAQ = (id) => {
    history.push(`/edit-faq/${id}`); // Redirect to the edit FAQ page with the FAQ ID
  };

  const handleDeleteFAQ = async (id) => {
    try {
      await axios.delete(`/api/faqs/${id}`); // Adjust endpoint as needed
      setFaqData(faqData.filter((faq) => faq._id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <h3 className="faq-subtitle">
          These are the most commonly asked questions about Chemistry DAMP blog.
          <br />
          Can't find what you are looking for? Contact us{" "}
          <a href="/contact">here</a>.
        </h3>
        <div className="faq-buttons">
          <button onClick={() => (window.location.href = "/blogs")}>
            Blogs
          </button>
          <button onClick={() => (window.location.href = "/team")}>Team</button>
          <button onClick={() => (window.location.href = "/")}>Home</button>
        </div>

        {isAdmin && (
          <div className="admin-controls">
            <button onClick={handleAddFAQ}>Add FAQ</button>
          </div>
        )}

        <div className="faq-questions">
          {faqData.map((faq, index) => (
            <div key={faq._id} className="faq-item">
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <FontAwesomeIcon icon={faQuestion} />
                {faq.question}
                <span
                  className={`arrow ${
                    activeIndex === index ? "down" : "right"
                  }`}
                >
                  &#x25B6;
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                  {isAdmin && (
                    <div className="admin-controls">
                      <button onClick={() => handleEditFAQ(faq._id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteFAQ(faq._id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
