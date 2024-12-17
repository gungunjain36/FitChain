/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ActivityInputForm = () => {
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState('');
  const [sets, setSets] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form data here
    console.log({ activity, calories, sets, duration });
    alert(`Activity: ${activity}\nCalories: ${calories}\nSets: ${sets}\nDuration: ${duration} mins`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Log Your Workout Activity
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Activity Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Activity Name</label>
            <input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Enter activity name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Calories Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Calories</label>
            <input
              type="text"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Enter calories burned"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Sets Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Sets</label>
            <input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="Enter number of sets"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Duration Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Duration (mins)</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter duration in minutes"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivityInputForm;
