import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from 'react-markdown';

const Gemini = ({ message , apiCallMessage}) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.post('http://localhost:5000/search', { query: message });
        const responseTexts = response.data.response_texts;

        setResults(responseTexts); // Set the first valid string or object
        
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (message) {
      fetchResults();
    }
  }, [apiCallMessage]);



  return (
    <div className="card mb-4 border-light shadow-sm rounded-4 p-3">
      <h5 className="card-title text-center mb-3">Search Results</h5>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && !results && (
        <p className="text-center">No results found for "{message}".</p>
      )}
      {!loading && !error && results && (
        <div className="text-start">
          {/* Convert object to string if necessary */}
          <ReactMarkdown>{typeof results === 'object' ? JSON.stringify(results, null, 2) : results}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Gemini;