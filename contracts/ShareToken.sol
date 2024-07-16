// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
//balanceOf is used for getting OWN balance

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ShareToken is ERC20, Ownable {

    uint256 public totalDeposit;

    uint256 public tokenPrice;

    constructor(uint256 initialSupply, uint256 initialPrice) ERC20("ShareToken", "SBT") Ownable(msg.sender)  {
    tokenPrice = initialPrice;
    _mint(msg.sender, initialSupply); // changed from msg.sender to _msgSender()
}
    
    function deposit() external payable {

        require(msg.value > 0, "You have to invest some ETH");

        uint256 amount = msg.value/tokenPrice;
        _mint(msg.sender, amount);

        totalDeposit += msg.value;

    }

    function setTokenPrice(uint256 newPrice) public {
        tokenPrice = newPrice;
    }
}







