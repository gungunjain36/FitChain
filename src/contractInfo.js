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
				"internalType": "string",
				"name": "_duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_calories",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sets",
				"type": "string"
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
						"internalType": "string",
						"name": "duration",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "calories",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sets",
						"type": "string"
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
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "calories",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sets",
				"type": "string"
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


export const myContractAddress = "0x6eD9331d821534B6d529937C804F490FF042218F";
