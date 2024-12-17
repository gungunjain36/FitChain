/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { getWeb3, getContract } from "../web3";

const AddWorkout = () => {
  const [formData, setFormData] = useState({
    activity: "",
    duration: 0,
    calories:0,
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
      setIsLoading(true); // Start loader
      const web3 = await getWeb3();
      const contract = await getContract(web3);
      const accounts = await web3.eth.getAccounts();
  
      await contract.methods
        .addWorkout(activity, duration, calories, sets, timestamp)
        .send({ from: accounts[0] });
  
      alert("Workout added successfully!");
      setFormData({ activity: "", duration: 0, calories: 0, sets: 0, timestamp: "" }); // Clear form
    } catch (error) {
      console.error("Error adding workout:", error);
      alert("Failed to add workout. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Add Workout 🏋️‍♀️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Activity */}
          <div>
            <label className="block text-gray-700 mb-2">Activity</label>
            <input
              type="text"
              name="activity"
              placeholder="Enter activity"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 mb-2">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              placeholder="Enter duration"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Calories */}
          <div>
            <label className="block text-gray-700 mb-2">Calories Burned</label>
            <input
              type="number"
              name="calories"
              placeholder="Enter calories burned"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sets */}
          <div>
            <label className="block text-gray-700 mb-2">Sets</label>
            <input
              type="number"
              name="sets"
              placeholder="Enter sets"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Timestamp */}
          <div>
            <label className="block text-gray-700 mb-2">Timestamp</label>
            <input
              type="text"
              name="timestamp"
              placeholder="YYYY-MM-DD"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          {/* Submit Button with Loader */}
<div className="flex justify-center">
  <button
    type="submit"
    className={`w-full bg-green-400 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center`}
    disabled={isLoading} // Disable button when loading
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
</div>

        </form>
      </div>
    </div>
  );
};

export default AddWorkout;
