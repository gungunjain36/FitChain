/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { getWeb3, getContract } from "../web3";
import { motion } from "framer-motion";
import { Activity, Clock, Flame, Dumbbell, Calendar } from "lucide-react";

const AddWorkout = () => {
  const [formData, setFormData] = useState({
    activity: "",
    duration: 0,
    calories: 0,
    sets: 0,
    timestamp: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { activity, duration, calories, sets, timestamp } = formData;

    try {
      setIsLoading(true);
      const web3 = await getWeb3();
      const contract = await getContract(web3);
      const accounts = await web3.eth.getAccounts();

      await contract.methods
        .addWorkout(activity, duration, calories, sets, timestamp)
        .send({ from: accounts[0] });

      alert("Workout added successfully!");
      setFormData({
        activity: "",
        duration: 0,
        calories: 0,
        sets: 0,
        timestamp: "",
      });
    } catch (error) {
      console.error("Error adding workout:", error);
      alert("Failed to add workout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/10 shadow-lg rounded-3xl p-8 w-full max-w-4xl border border-white/20"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-10 text-center">
          Add Workout 🏋️‍♂️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              label="Activity"
              name="activity"
              type="text"
              placeholder="e.g., Running"
              value={formData.activity}
              onChange={handleChange}
              icon={<Activity className="text-blue-400" />}
            />

            <InputField
              label="Duration (minutes)"
              name="duration"
              type="number"
              placeholder="e.g., 45"
              value={formData.duration}
              onChange={handleChange}
              icon={<Clock className="text-blue-400" />}
            />

            <InputField
              label="Calories Burned"
              name="calories"
              type="number"
              placeholder="e.g., 300"
              value={formData.calories}
              onChange={handleChange}
              icon={<Flame className="text-orange-400" />}
            />

            <InputField
              label="Sets"
              name="sets"
              type="number"
              placeholder="e.g., 3"
              value={formData.sets}
              onChange={handleChange}
              icon={<Dumbbell className="text-purple-400" />}
            />
          </div>

          <div className="flex justify-center">
            <InputField
              label="Date"
              name="timestamp"
              type="date"
              value={formData.timestamp}
              onChange={handleChange}
              icon={<Calendar className="text-green-400" />}
              className="w-full md:w-1/2"
            />
          </div>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className={`w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-blue-400 transition-all duration-300 ${
                isLoading ? "opacity-75 cursor-not-allowed" : "hover:scale-105"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Add Workout"
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type,
  placeholder,
  // eslint-disable-next-line react/prop-types
  value,
  onChange,
  icon,
  className = "",
}) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label className="block text-gray-300 font-semibold mb-2">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
      />
    </div>
  </motion.div>
);

export default AddWorkout;
