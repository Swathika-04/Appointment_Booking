import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/appointments";

function App() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    phone: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await axios.post(API_URL, formData);
      setSuccessMessage("Appointment booked successfully! We will contact you soon.");
      setFormData({
        patientName: "",
        age: "",
        phone: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>City Care Hospital</h1>
        <p>Welcome! Book your appointment with our trusted doctors quickly and easily.</p>
      </header>

      <div className="form-card">
        <h2>Book an Appointment</h2>

        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="error-msg">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter patient name"
            required
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            min="0"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />

          <label>Doctor Name</label>
          <select
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          >
            <option value="">Select a doctor</option>
            <option value="Dr. Sharma (General Physician)">Dr. Sharma (General Physician)</option>
            <option value="Dr. Patel (Cardiologist)">Dr. Patel (Cardiologist)</option>
            <option value="Dr. Iyer (Dermatologist)">Dr. Iyer (Dermatologist)</option>
            <option value="Dr. Reddy (Orthopedic)">Dr. Reddy (Orthopedic)</option>
            <option value="Dr. Khan (Pediatrician)">Dr. Khan (Pediatrician)</option>
          </select>

          <label>Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />

          <label>Appointment Time</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />

          <button type="submit">Book Appointment</button>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} City Care Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
