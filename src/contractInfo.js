/* eslint-disable no-unused-vars */
const abi =  [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_activity",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_duration",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_calories",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_sets",
					"type": "uint256"
				}
			],
			"name": "addWorkout",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getWorkouts",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "activity",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "duration",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "calories",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "sets",
							"type": "uint256"
						}
					],
					"internalType": "struct FitChain.WorkOut[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "records",
			"outputs": [
				{
					"internalType": "string",
					"name": "activity",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "duration",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "calories",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "sets",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]


const contractAddress = "0x1e7aDC231d278fD7BE5671660F6BAe629BB33b7C";