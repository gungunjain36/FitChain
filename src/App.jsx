/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, List } from "lucide-react";
import "./App.css";
import AddWorkout from "./components/AddWorkout";
import ViewWorkouts from "./components/ViewWorkouts";

function App() {
  return (
    <Router>
      {/* Updated Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-2xl border-b border-blue-400"
      >
        {/* Gradient Heading */}
        <motion.h1
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          whileHover={{ scale: 1.05 }}
        >
          Fit-Chain 🏋️‍♂️
        </motion.h1>

        {/* Navigation Links */}
        <div className="space-x-6 flex">
          <NavLink to="/" icon={<Dumbbell size={20} className="text-blue-400" />}>
            Add Workout
          </NavLink>
          <NavLink
            to="/view-workouts"
            icon={<List size={20} className="text-cyan-300" />}
          >
            View Workouts
          </NavLink>
        </div>
      </motion.nav>

   
      <div className="min-h-screen bg-gray-800">
        <Routes>
          <Route path="/" element={<AddWorkout />} />
          <Route path="/view-workouts" element={<ViewWorkouts />} />
        </Routes>
      </div>
    </Router>
  );
}


// eslint-disable-next-line react/prop-types
const NavLink = ({ to, children, icon }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      to={to}
      className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 bg-gray-700 hover:bg-gray-600 shadow-md"
    >
      {icon}
      <span className="font-medium">{children}</span>
    </Link>
  </motion.div>
);

export default App;
