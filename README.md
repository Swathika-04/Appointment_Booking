[README.md](https://github.com/user-attachments/files/30277245/README.md)
# Hospital Management Website (MERN Stack) — Appointment Booking

A very simple, beginner-friendly hospital appointment booking web app built with MongoDB, Express.js, React.js, and Node.js. This project is intentionally minimal and suitable for a college mini project — it only handles booking and viewing appointments. No authentication, billing, or dashboards.

---

## Folder Structure

```
hospital-management/
│
├── backend/
│   ├── server.js
│   ├── Appointment.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## Features

- Home page with hospital name and welcome message
- Appointment booking form (Patient Name, Age, Phone, Doctor dropdown, Date, Time)
- Saves appointments to MongoDB via REST API
- View all appointments via `GET /appointments`
- Success/error message shown after booking
- Simple, responsive CSS (no frameworks)

---

## Tech Stack

- **Frontend:** React.js (functional components, hooks), Axios, plain CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose

---

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, **or** a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster

---

## Step-by-Step Setup Instructions

### 1. Download / Clone the Project

Place the `hospital-management` folder anywhere on your computer.

### 2. Backend Setup

Open a terminal and navigate to the backend folder:

```bash
cd hospital-management/backend
```

Install dependencies:

```bash
npm install
```

A `.env` file is already included with default values:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/hospitalDB
```

> If you're using MongoDB Atlas instead of a local database, replace `MONGO_URI` with your Atlas connection string, e.g.:
> `mongodb+srv://<username>:<password>@cluster0.mongodb.net/hospitalDB`

Make sure MongoDB is running locally (if using local MongoDB):

```bash
mongod
```

Start the backend server:

```bash
npm start
```

You should see:

```
MongoDB connected successfully
Server is running on http://localhost:5000
```

### 3. Frontend Setup

Open a **new terminal window** and navigate to the frontend folder:

```bash
cd hospital-management/frontend
```

Install dependencies:

```bash
npm install
```

Start the React app:

```bash
npm start
```

The app will open automatically at:

```
http://localhost:3000
```

### 4. Use the App

1. Fill out the appointment form (Patient Name, Age, Phone, Doctor, Date, Time).
2. Click **Book Appointment**.
3. You'll see a success message once it's saved to MongoDB.

### 5. View All Appointments (API)

You can view all booked appointments by visiting this URL in your browser or Postman:

```
http://localhost:5000/appointments
```

---

## API Endpoints

| Method | Endpoint        | Description                  |
|--------|-----------------|-------------------------------|
| POST   | /appointments   | Create/save a new appointment |
| GET    | /appointments   | Get list of all appointments  |

### Sample POST body (JSON):

```json
{
  "patientName": "John Doe",
  "age": 28,
  "phone": "9876543210",
  "doctorName": "Dr. Sharma (General Physician)",
  "appointmentDate": "2026-07-01",
  "appointmentTime": "10:30"
}
```

---

## Notes

- This project is built for learning/demo purposes — there's no authentication or input sanitization beyond basic required-field checks.
- Both servers (backend on port 5000, frontend on port 3000) must be running at the same time for the app to work.
- CORS is enabled on the backend so the React app (port 3000) can talk to the API (port 5000) without issues.
