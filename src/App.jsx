/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddWorkout from "./components/AddWorkout";
import ViewWorkouts from "./components/ViewWorkouts";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-green-400 text-black p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Workout Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Add Workout
          </Link>
          <Link to="/view-workouts" className="hover:text-gray-200">
            View Workouts
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<AddWorkout />} />
          <Route path="/view-workouts" element={<ViewWorkouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
