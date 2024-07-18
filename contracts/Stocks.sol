// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
//balanceOf is used for getting OWN balance

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Stocks is ERC20 {

    uint256[] public participants;
    mapping(uint256 => bool) public isParticipant;
    mapping(uint256=>uint256) public userTokenBalance;

    constructor() ERC20("ShareStocks", "SBT") {

    }

    function deposit(uint256 userId) external payable {

        require(msg.value > 0, "You have to invest some ETH");

        if(!isParticipant[userId]) {
            participants.push(userId);
            isParticipant[userId] = true;
        }
        _mint(msg.sender, msg.value);
        userTokenBalance[userId] +=msg.value;
    }

    function getUserTokenBalance(uint256 userId) public view returns(uint256){
        return userTokenBalance[userId];
    }
}


