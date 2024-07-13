// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Ownership {

    uint256 public totalDeposit;
    
    function deposit() external payable {

        require(msg.value > 0, "You have to invest some ETH");

        totalDeposit += msg.value;

    }
}
