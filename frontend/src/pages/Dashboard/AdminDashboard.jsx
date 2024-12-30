import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [updateForm, setUpdateForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    console.log("Authentication status:", isAuthenticated);

    if (!isAuthenticated || isAuthenticated !== "true") {
      console.log("Not authenticated, redirecting...");
      navigate("/admin-login");
    } else {
      fetchAppointments();
    }
  }, [navigate]);

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "http://localhost/backend/db/getAppointments.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Appointments data:", data);
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Error fetching appointments.");
    }
  };
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(
        `http://localhost/backend/db/deleteAppointments.php`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ appointment_id: appointmentId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Appointment deleted successfully!");
        fetchAppointments();
      } else {
        toast.error(data.message || "Failed to delete appointment.");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      toast.error("Failed to delete appointment.");
    }
  };
  const handleUpdateAppointment = (appointment) => {
    setUpdateForm(appointment);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedAppointment = {
      appointment_id: updateForm.appointment_id,
      id: updateForm.appointment_id,
      name: updateForm.name,
      email: updateForm.email,
      phone: updateForm.phone,
      date: updateForm.date,
      time: updateForm.time,
      service: updateForm.service,
      notes: updateForm.notes,
    };

    try {
      const response = await fetch(
        "http://localhost/backend/db/updateAppointments.php",
        {
        
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAppointment),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Appointment updated successfully!");
        setUpdateForm(null);
        fetchAppointments();
      } else {
        toast.error(data.message || "Failed to update appointment.");
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error(`Failed to update appointment. Error: ${error.message}`);
    }
  };

  const handleFormChange = (event) => {
    setUpdateForm({
      ...updateForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="admin-dashboard">
      <ToastContainer />
      <h1>Admin Dashboard</h1>
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("adminAuthenticated");
          console.log("Logged out, removing authentication...");
          navigate("/admin-login");
        }}
      >
        Logout
      </button>

      {updateForm && (
        <div className="update-form">
          <h2>Update Appointment</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              # ID:
              <input
                type="number"
                name="id"
                value={updateForm.appointment_id}
                disabled
              />
            </label>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updateForm.name}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={updateForm.email}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={updateForm.phone}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={updateForm.date}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={updateForm.time}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Service:
              <input
                type="text"
                name="service"
                value={updateForm.service}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Notes:
              <textarea
                name="notes"
                value={updateForm.notes}
                onChange={handleFormChange}
              ></textarea>
            </label>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setUpdateForm(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th># ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Notes</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.appointment_id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.service}</td>
              <td>{appointment.notes}</td>
              <td>
                <button
                  className="status-btn"
                  onClick={() => handleUpdateAppointment(appointment)}
                >
                  Update
                </button>

                <button
                  className="status-btn"
                  onClick={() => handleDeleteAppointment(appointment.appointment_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
