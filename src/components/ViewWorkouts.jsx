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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Your Workouts 🏋️‍♂️
        </h2>

        {/* Conditional Rendering */}
        {workouts.length === 0 ? (
          <p className="text-center text-gray-500">No workouts found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg shadow">
                    <p className="text-lg font-medium text-blue-600 mb-2">
                      {workout.activity || workout[0]} {/* Support both formats */}
                    </p>
                    <p><strong>Duration:</strong> {workout.duration || workout[1]} mins</p>
                    <p><strong>Calories:</strong> {workout.calories || workout[2]}</p>
                    <p><strong>Sets:</strong> {workout.sets || workout[3]}</p>
                    <p><strong>Timestamp:</strong> {workout.timestamp || workout[4]}</p>
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewWorkouts;
