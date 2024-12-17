import Web3 from "web3";
import { myABI, myContractAddress } from "./contractInfo";
// eslint-disable-next-line no-undef, no-unused-vars
var myContract = new web3js.eth.Contract(myABI, myContractAddress);


export const getWeb3 = async () => {
  if (window.ethereum) {
    // MetaMask is available
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return web3;
  } else {
    alert("Please install MetaMask to use this application.");
    return null;
  }
};

export const contract = new Web3.eth.Contract(myABI, myContractAddress);
