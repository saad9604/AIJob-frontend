import React, { useState, useRef } from "react";
import { VscArrowUp } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = ({ onSearch , setMessage , message, setApiCallMessage}) => {
  // const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (message.trim()) {
      setApiCallMessage(message);
      onSearch(message);
      // setMessage("");
      setSubmitted(true); // Hide the title and subtitle after submission
    }
  };

  const handleFileAttach = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file);
      onSearch("resume-attached"); // You can pass this string to indicate resume was attached
      setSubmitted(true); // Hide the title and subtitle after file attachment
    }
  };

  return (
    <div className="modern-wrapper">
      {!submitted && (
        <>
          <h1 className="modern-title">Introducing AI-Powered Job Search Engine</h1>
          <p className="modern-subtitle">Upload your resume to get matched with the best jobs instantly</p>
        </>
      )}

      <div className="modern-searchbar-container">
        <textarea
          className="modern-textarea"
          placeholder="Search jobs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
        />

        <div className="modern-controls">
          <button
            className="icon-btn"
            onClick={() => fileInputRef.current.click()}
            title="Attach Resume"
          >
            <FiPaperclip size={18} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileAttach}
          />

          <button className="icon-btn send-btn" onClick={handleSend} title="Send Search">
            <VscArrowUp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
