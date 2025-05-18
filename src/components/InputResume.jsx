import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const InputResume = ({ show, onClose, onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && onSubmit) {
      onSubmit(file);
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title w-100 text-center">Please submit your resume first</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
              <label className="form-label mb-3">
                <span className="mb-2 d-block">Upload your resume to apply for jobs and access the link:</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary mt-2 w-100">
                Submit Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputResume;