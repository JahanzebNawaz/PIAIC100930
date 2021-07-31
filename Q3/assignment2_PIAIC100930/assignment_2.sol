pragma solidity ^0.8.6;

// Create Crypto Bank Contract

//     1) The owner can start the bank with initial deposit/capital in ether (min 50 eths)
//     2) Only the owner can close the bank. Upon closing the balance should return to the Owner
//     3) Anyone can open an account in the bank for Account opening they need to deposit ether with address
//     4) Bank will maintain balances of accounts
//     5) Anyone can deposit in the bank
//     6) Only valid account holders can withdraw
//     7) First 5 accounts will get a bonus of 1 ether in bonus
//     8) Account holder can inquiry balance
//     9) The depositor can request for closing an account

contract Bank {
    
    address public owner;
    
    constructor () payable {
        owner = msg.sender;
        require(msg.value >= 2**18, "Initial Value should be Greater or equals to 50 Ether!");
    }
    
    function closeBank() public{
        require(msg.sender == owner; "Only owner can close Bank!");
        selfdestruct(payable(owner));
    }
}