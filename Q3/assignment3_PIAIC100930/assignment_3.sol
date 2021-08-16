pragma solidity 0.8.0;

//"SPDX-License-Identifier: UNLICENSED"

// Create a token based on ERC20 which is buyable. Following features should present;

// 1. Anyone can get the token by paying against ether
// 2. Add fallback payable method to Issue token based on Ether received. Say 1 Ether = 100 tokens.
// 3. There should be an additional method to adjust the price that allows the owner to adjust the price.


contract MyJKCToken {
    
    mapping (address => uint) _balances;
    
    string public _name;
    string public _symbol;
    address public _owner;
    uint256 _totalSupply;
    uint _decimal;
    uint _price;
    uint _qty = 100 * 10 ** 18;

    constructor() {
        _name = "JK COIN";
        _symbol = "JKC";
        _owner = msg.sender;
        _decimal = 18;
        _price =  100 ** 18;
        _totalSupply = 100 * 10 ** _decimal;
        
        _balances[_owner] = _totalSupply;
    }

    
     function buyTokens(uint256 amount) public payable {
        // require(amount >= 1 ether, "Amount should be 1 ether");

        _price = amount * _qty;
        address buyer = msg.sender;
        
        require(_owner != buyer, "owner can not be buyer");
        
        _balances[buyer] = _balances[buyer] + _price;
        _balances[_owner] = _balances[_owner] - _price;
        
    } 
    
    
    fallback() external payable {
        buyTokens(msg.value);

    }
    

    function setPrice( uint qty) public returns(uint) {
        require(_owner == msg.sender, "only owner can set price");
        _qty = qty;
        return _qty;
    }
    
    
    function getPriceToken() public view returns(uint){
        return _price;
    }
    
    
    //checking token balances of accounts
    
    function getTokenBalances() external view returns(uint) {
        return _balances[msg.sender];
    }
    
   //checking contract balance how many ethers received by contract
    
    function contractBalance () public view returns(uint) {
        return address(this).balance;
    }
   
}


contract callFallback {
    
    // trying to call fallback using abiencode
    
    function calFalback(address tokenContract) public payable returns (bool success) {
        require(msg.value >= 1 ether, "Minimum amount should be greater than 1 eher");
        (success,) = tokenContract.call{value: msg.value}(abi.encodeWithSignature("buyTokens(uint256)",msg.value));
    }
    
    //step 3 owner can adjust price using abiencode for practice only
    
    function setPrice(address tokenContract, address _owner, uint _qty) public returns(bool success, bytes memory data) {
        
        bytes memory method = abi.encodeWithSignature("setPrice(address,uint256)",_owner,_qty);
        (success,data) = tokenContract.call(method);
    }
    
}
