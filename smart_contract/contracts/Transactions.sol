// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

// Create our contract and the name as to be the same with our file
contract Transactions {
    // Variable that holds the number of our transactions
    uint256 transactionCount;

    // Create an event to emit when a transfer is made
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // Create a struct to hold transaction details (transaction structure)
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Define an Array to hold all transactions: meaning an array of objects
    TransferStruct[] transactions;

    // Function to add a transaction to the blockchain: memory message and memory receiver means these infos must be in the blockchain  
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;

        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // Function to get all transactions from the TransfertStruct[] array in the memory
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // Function to get the number of transactions: returns transaction count which is a number
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}