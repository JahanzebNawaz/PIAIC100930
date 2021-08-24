//"SPDX-License-Identifier: UNLICENSED"
pragma solidity 0.8.0;


contract ERC20 {
    
    mapping (address => uint) _balances;
    
    string public _name;
    string public _symbol;
    address public _owner;
    uint256 _totalSupply;
    uint _decimal;
    uint _price;
    uint _qty = 100 * 10 ** 18;
    uint _cap;
    uint _initialSupply;
    uint _releasetime;

     constructor()  public {
        _name = "JK COIN";
        _symbol = "JKC";
        _owner = msg.sender;
        _decimal = 18;
        _price =  100 ** 18;
        _cap = 2000 * 10 ** _decimal;
        _initialSupply = 200 * 10 ** _decimal;
        _totalSupply = _initialSupply;
        _balances[_owner] = _totalSupply;
        _releasetime = block.timestamp + (30*1 days);
    }
    
    modifier onlyOwner {
        require(msg.sender == _owner,"only owner can run this function");
        _;
    }

    
     function buyTokens(uint amount) public payable {
        // require(amount >= 1 ether, "Amount should be 1 ether");

        _price = amount * _qty;
        address buyer = msg.sender;
        
        require(_owner != buyer, "owner can not be buyer");
        
        _balances[buyer] = _balances[buyer] + _price;
        _balances[_owner] = _balances[_owner] - _price;
        
    } 
    
    function _mint(uint _amount) public onlyOwner returns (uint) {
        require(_totalSupply + _amount < _cap , "miniting limit exceded");
        _balances[msg.sender] += _amount;
        _totalSupply += _amount;
        return _totalSupply;
    }
    
    
    function transfer(address recipient, uint256 amount) public  returns (bool) {
        require(msg.sender != address(0), " Invalid Sender Address");
        require(recipient != address(0), " Invalid Reciever Address");
        require(_balances[msg.sender] > amount,"Not enfough balance.");
        require(block.timestamp >= _releasetime,"Can not transfer before release time!");
        _balances[msg.sender] = _balances[msg.sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;
        return true;
    }
    
    fallback() external payable {
        buyTokens(msg.value);

    }
    
    receive() external payable{}
    

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

