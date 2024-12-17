import Web3 from "web3";
import { myABI, myContractAddress } from "./contractInfo";

export const getWeb3 = async () => {
  if (window.ethereum) {
    // MetaMask is available
    const web3 = new Web3(window.ethereum); // Create Web3 instance
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return web3;
  } else {
    alert("Please install MetaMask to use this application.");
    return null;
  }
};

export const getContract = async () => {
  const web3 = await getWeb3(); // Initialize Web3
  if (!web3) return null; // Exit if Web3 is not initialized

  const contract = new web3.eth.Contract(myABI, myContractAddress); // Instantiate the contract
  return contract;
};
