import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import InputResume from './InputResume';

const Gemini = ({ message, apiCallMessage }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For modal control
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [pendingApplyLink, setPendingApplyLink] = useState(null);

  // Helper to extract JSON from markdown code block
  const extractJsonArray = (str) => {
    try {
      const match = str.match(/```json\s*([\s\S]*?)\s*```/);
      if (match) {
        return JSON.parse(match[1]);
      }
    } catch (e) {
      // fallback
    }
    return [];
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.post('https://aijob-backend-21xr.onrender.com/google-search', { query: message });
        const responseTexts = response.data.results;
        const jobs = extractJsonArray(responseTexts);
        setResults(jobs);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (message) {
      fetchResults();
    }
  }, [apiCallMessage, message]);

  // Handle Apply button click
  const handleApplyClick = (applyLink) => {
    setPendingApplyLink(applyLink);
    setShowResumeModal(true);
  };

  // Handle resume submit
  const handleResumeSubmit = (file) => {
    // You can handle file upload here if needed
    setShowResumeModal(false);
    if (pendingApplyLink) {
      window.open(pendingApplyLink, "_blank", "noopener,noreferrer");
      setPendingApplyLink(null);
    }
  };

  return (
    <div className="card mb-4 border-light shadow-sm rounded-4 p-3">
      <h5 className="card-title text-center mb-3">Search Results</h5>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && results.length === 0 && (
        <p className="text-center">No results found for "{message}".</p>
      )}
      {!loading && !error && results.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {results.map((job, idx) => (
            <div className="col" key={idx}>
              <div className="card h-100 shadow-sm border-primary">
                <div className="card-body">
                  <h6 className="card-title mb-2">{job["job description"]}</h6>
                  <p className="mb-1"><strong>Company:</strong> {job.company}</p>
                  <p className="mb-1"><strong>Location:</strong> {job.Location}</p>
                  {job["salary range"] && (
                    <p className="mb-1"><strong>Salary:</strong> {job["salary range"]}</p>
                  )}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    onClick={() => handleApplyClick(job["Apply link"])}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <InputResume
        show={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        onSubmit={handleResumeSubmit}
      />
    </div>
  );
};

export default Gemini;