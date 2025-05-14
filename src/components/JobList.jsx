const jobs = [
  {
    title: "AI Research Scientist",
    company: "Appit Software Solutions",
    location: "Bangalore (Karnataka)",
    experience: "7+ Years",
    salary: "Not Disclosed",
    jobType: "Full-time",
    mode: "Remote",
    postedDaysAgo: 3,
    skills: ["AI/ML", "Data Visualization", "Machine Learning", "Python Development", "Statistical Programming"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Frontend Developer",
    company: "ABC Pvt Ltd",
    location: "Hyderabad",
    experience: "2",
    salary: "3 Lakh – 5 Lakh P.A",
    jobType: "Full-time",
    mode: "Remote",
    postedDaysAgo: 120,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Sr. Full Stack Developer",
    company: "OpenXcell Technolabs Pvt. Ltd",
    location: "Ahmedabad (Gujarat)",
    experience: "3-6",
    salary: "4 Lakh – 9 Lakh P.A",
    jobType: "Full-time",
    mode: "On-site",
    postedDaysAgo: 269,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  
];


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Briefcase, MapPin, Clock, Star } from 'lucide-react';


const JobCard = ({ job }) => (
  <div className="card mb-4 border-light shadow-sm rounded-4 p-3">
    <div className="row g-3 align-items-center">
      <div className="col-md-9">
        <p className="text-uppercase fw-semibold mb-1 text-secondary" style={{ fontSize: '0.75rem' }}>{job.company}</p>
        <h5 className="fw-bold mb-2">{job.title}</h5>
        <div className="mb-2 d-flex flex-wrap align-items-center gap-3">
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            <Star size={14} className="me-1 text-warning" /> Featured Role
          </span>
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            <Clock size={14} className="me-1" /> {job.experience}
          </span>
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            ₹ {job.salary}
          </span>
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            <MapPin size={14} className="me-1" /> {job.location}
          </span>
        </div>
        <div className="mb-2 d-flex gap-3">
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            <Briefcase size={14} className="me-1" /> {job.jobType}
          </span>
          <span className="d-flex align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
            🏢 {job.mode}
          </span>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {job.skills.map((skill, idx) => (
            <span key={idx} className="badge bg-warning text-dark rounded-pill px-2 py-1" style={{ fontSize: '0.75rem' }}>
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-3 text-muted" style={{ fontSize: '0.75rem' }}>Posted {job.postedDaysAgo} days ago</div>
      </div>
      <div className="col-md-3 d-flex justify-content-end">
        <button style={{border:"1px solid black"}} className="btn btn-primary rounded-pill px-4 py-2 fw-semibold mt-2">Apply</button>
      </div>
    </div>
  </div>
);

const JobList = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-6" key={index}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
