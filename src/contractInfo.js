/* eslint-disable no-unused-vars */
export const myABI =  [
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
			},
			{
				"internalType": "string",
				"name": "_timestamp",
				"type": "string"
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
					},
					{
						"internalType": "string",
						"name": "timestamp",
						"type": "string"
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
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


export const myContractAddress = "0x7AcEfe7A11B903a487d26C49cD671192810A0357";
