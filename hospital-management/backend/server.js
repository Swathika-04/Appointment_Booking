const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Appointment = require("./Appointment");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/hospitalDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes

// Test route
app.get("/", (req, res) => {
  res.send("Hospital Management API is running...");
});

// POST /appointments -> Save a new appointment
app.post("/appointments", async (req, res) => {
  try {
    const { patientName, age, phone, doctorName, appointmentDate, appointmentTime } = req.body;

    if (!patientName || !age || !phone || !doctorName || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      patientName,
      age,
      phone,
      doctorName,
      appointmentDate,
      appointmentTime,
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: savedAppointment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Could not book appointment." });
  }
});

// GET /appointments -> Fetch all appointments
app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Could not fetch appointments." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
