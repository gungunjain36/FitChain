import React, { useState, useEffect } from "react";
import { getWeb3, getContract } from "../web3";

const SearchWorkout = () => {
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [error, setError] = useState("");

  const fetchWorkouts = async () => {
    try {
      const web3 = await getWeb3();
      const contract = await getContract(web3);
      const accounts = await web3.eth.getAccounts();
      const userWorkouts = await contract.methods.getWorkouts().call({ from: accounts[0] });
      setWorkouts(userWorkouts);
    } catch (err) {
      console.error("Error fetching workouts:", err);
      setError("Failed to load workouts.");
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleSearch = () => {
    if (!date.trim()) {
      setError("Please select a date.");
      return;
    }

    const startOfDay = Math.floor(new Date(date).setHours(0, 0, 0, 0) / 1000);
    const endOfDay = Math.floor(new Date(date).setHours(23, 59, 59, 999) / 1000);

    const results = workouts.filter((workout) => {
      const timestamp = parseInt(workout.timestamp || workout[4], 10);
      return timestamp >= startOfDay && timestamp <= endOfDay;
    });

    setFilteredWorkouts(results);
    setError(results.length ? "" : "No workouts found for the selected date.");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-4">Search Workouts</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded mb-4 text-black"
        />
        <button onClick={handleSearch} className="p-3 bg-blue-600 rounded w-full">
          Search
        </button>
        {error && <p className="text-red-400 mt-4">{error}</p>}
        <div className="mt-4">
          {filteredWorkouts.map((workout, idx) => (
            <div key={idx} className="p-3 border-b">
              <p>Activity: {workout.activity}</p>
              <p>Duration: {workout.duration} mins</p>
              <p>Calories: {workout.calories}</p>
              <p>Sets: {workout.sets}</p>
              <p>
                Date: {new Date(workout.timestamp * 1000).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchWorkout;
