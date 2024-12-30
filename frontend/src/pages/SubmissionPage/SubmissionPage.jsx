import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SubmissionPage.css';
function SubmissionMessagePage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch submissions
    fetch("http://localhost/backend/db/getSubmissions.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmissions(data.submissions);
        } else {
          setError(data.message || "Error fetching submissions.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching submissions: " + error.message);
        setLoading(false);
      });
  }, []);

  const handleAddAppointment = (submission) => {
    navigate("/appointments", {
      state: {
        firstName: submission.first_name,
        lastName: submission.last_name,
        email: submission.email,
        phoneNumber: submission.phone_number,
      },
    });
  };

  return (
    <div className="submission-message-page">
      <h1>Admin - Submissions</h1>
      {loading && <p>Loading submissions...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {submissions.length > 0 ? (
        <div className="submissions-list">
          {submissions.map((submission, index) => (
            <div key={index} className="submission-item">
              <p><strong>First Name:</strong> {submission.first_name}</p>
              <p><strong>Last Name:</strong> {submission.last_name}</p>
              <p><strong>Email:</strong> {submission.email}</p>
              <p><strong>Phone Number:</strong> {submission.phone_number}</p>
              <p><strong>Message:</strong> {submission.message}</p>
              <button
                onClick={() => handleAddAppointment(submission)}
                className="add-appointment-btn"
              >
                Add Appointment
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
}

export default SubmissionMessagePage;
