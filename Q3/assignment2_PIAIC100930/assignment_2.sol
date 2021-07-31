pragma solidity 0.8.0;

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
    mapping(address => uint) private accounts;
    uint counter;
    // struct Account {
    //     string name;
    //     uint balance;
    // }
    // Account account;
    
    constructor () payable {
        owner = msg.sender;
        require(msg.value >= 50**18, "Initial Value should be Greater or equals to 50 Ether!");
        counter = 0;
    }
    
    modifier validAccount() {
        require(
            msg.sender != address(0) && msg.value >= 2**18, 
            "Valid Address and Initial balance should be more than 1 Ether!"
            );
            _;
    }
    
    function closeBank() external payable{
        require(msg.sender == owner, "Only owner can close Bank!");
        selfdestruct(payable(owner));
    }
    
    function openAccount() public payable validAccount{
        accounts[msg.sender] = msg.value;
        if(counter <= 4){
            payable(msg.sender).transfer(1**18);
            accounts[msg.sender] += 1**18;
            counter++;
        }
    }
    
    function depositAmount(address _sender, uint _amount) public payable validAccount{
        accounts[_sender] = _amount;
    }
    
    function withdrawAmount(uint _amount) public payable validAccount{
        require(_amount >= accounts[msg.sender], "Not enough balance!");
        payable(msg.sender).transfer(_amount);
        accounts[msg.sender] -= _amount;
    }
    
    function getBalance() public view returns(uint){
        return accounts[msg.sender];
    }
    
    function closeAccount() public  {
        require(msg.sender != address(0) && accounts[msg.sender] > 0, "Invalid Account Address!");
        payable(msg.sender).transfer(accounts[msg.sender]);
        delete accounts[msg.sender];
    }
    
    function bankBalance() public view returns(uint){
        require(msg.sender == owner, "Only owner can view");
        return address(this).balance;
    }
}