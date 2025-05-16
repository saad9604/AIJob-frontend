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
          const response = await axios.post('https://aijob-backend-21xr.onrender.com/duck-gemini-search', { query: message });
          const responseTexts = response.data.response_texts;
          setResults(responseTexts);
        
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
      {!loading && !error && results.length === 0 && (
        <p className="text-center">No results found for "{message}".</p>
      )}
      {!loading && !error && results.length > 0 && (
        <div className="list-group">
          {results.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-3">
              {group.map((item, index) => (
                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                  <h6 className="mb-1">{item.title}</h6>
                  <p className="mb-0 text-muted">{item.snippet}</p>
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gemini;