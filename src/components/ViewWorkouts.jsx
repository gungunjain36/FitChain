/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getWeb3, getContract } from "../web3";

const ViewWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const web3 = await getWeb3();
      const contract = await getContract(web3);
      const accounts = await web3.eth.getAccounts();

      const userWorkouts = await contract.methods.getWorkouts().call({
        from: accounts[0],
      });

      console.log("Fetched Workouts:", userWorkouts); // Log the output
      setWorkouts(userWorkouts);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-gray-900 shadow-2xl border border-blue-500 rounded-3xl p-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
          Your Workouts 🏋️‍♂️
        </h2>

        {/* Conditional Rendering */}
        {workouts.length === 0 ? (
          <p className="text-center text-gray-400">No workouts found. Start adding some!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <p className="text-xl font-semibold text-blue-400 mb-2">
                  {workout.activity || workout[0]} {/* Support both formats */}
                </p>
                <p className="text-gray-300">
                  <strong>Duration:</strong> {workout.duration || workout[1]} mins
                </p>
                <p className="text-gray-300">
                  <strong>Calories:</strong> {workout.calories || workout[2]}
                </p>
                <p className="text-gray-300">
                  <strong>Sets:</strong> {workout.sets || workout[3]}
                </p>
                <p className="text-gray-300">
                  <strong>Timestamp:</strong> {new Date(workout.timestamp || workout[4] * 1000).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewWorkouts;
