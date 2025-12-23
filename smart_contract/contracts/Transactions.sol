// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    // Variable that holds the number of our transactions
    uint256 transactionCount;

    // Create an event to emit when a transfer is made
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // Create a struct to hold transaction details
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Define an Array to hold all transactions
    TransferStruct[] transactions;

    // Function to add a transaction to the blockchain
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // Function to get all transactions
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // Function to get the number of transactions
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}