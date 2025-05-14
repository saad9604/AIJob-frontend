import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobList';
import './App.css';
import Gemini from './components/Gemini';

function App() {
  const [searchDone, setSearchDone] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  const [message, setMessage] = useState("");
  const [apiCallMessage, setApiCallMessage] = useState("");
  const handleSearchClick = () => {
    setStartTransition(true);
    // setTimeout(() => setSearchDone(true), 1000); // after animation show results
    setSearchDone(true);
  };

  return (
    <div className="app-container">
      <div className={`search-wrapper ${startTransition ? 'move-to-top' : ''}`}>
        <SearchBar onSearch={handleSearchClick} setMessage={setMessage}  message = {message} setApiCallMessage={setApiCallMessage}/>
      </div>

      {searchDone && (
        <div className="results-wrapper fade-in">

          <Gemini message={message} apiCallMessage={apiCallMessage}/>
        </div>
      )}
    </div>
  );
}

export default App;
