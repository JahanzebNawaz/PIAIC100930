//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract ERC20Token{
    address private Owner;
    address private Delegated;
    string private TokenName;
    string private TokenSymbol;
    uint256 private TotalSupply;
    uint256 private TokenConversion = 100;
    uint256  private Caped;
    uint256 private ReleaseTime;
    mapping (address => uint256) MyBalance;
    mapping (address => mapping(address => uint256)) Allowance;
    
    event _Transfer (address indexed _Receipent, uint256 _Tokens);
    event _Approved (address indexed _Owner, address indexed _Receipent, uint256 _Tokens);
    
    event _ValueReceived (address indexed _From, uint256 _Value);
    event _TransferFrom(address indexed _Owner, address indexed _To, uint256 _Tokens);
    
   constructor () {
        
        Owner = msg.sender;
        TokenName = "JK Coin";
        TokenSymbol = "JKC";
        TotalSupply = 1000000000;
        MyBalance[Owner] = TotalSupply;
        Caped = TotalSupply*2;
        ReleaseTime = block.timestamp + (0*1 days);
        
    }
    
    modifier OnlyOwner(address _Sender){
        require (Owner == _Sender);
        _;
    }
    
    modifier OwnerDelegated(address _Address){
        require (Owner == _Address || Delegated == _Address);
        _;
    }
    
    function IssueToken (address _Sender, uint256 _Value, uint256 _RelTime ) internal {
        require(block.timestamp >= _RelTime, "Token release time has not yet come");
        require (_Value > 0, "No ether sent");
       
        uint256 _Tokens = (_Value/(10**18)) * TokenConversion;
       
        MyBalance[_Sender] += _Tokens;
        MyBalance[Owner] -= _Tokens;
        
        emit _ValueReceived(_Sender, _Value);
    }
    
    function ChangeConversion (uint256 _Rate) public OwnerDelegated(msg.sender){
       
        require(_Rate > 0, "Must enter some value");
        
        TokenConversion = _Rate;
    }
    
    function PurchaseTokens() public payable {
        
        require(msg.value > 0, "Send some ether to purchase tokens");
        
        IssueToken(msg.sender, msg.value, ReleaseTime);
    }
    
    function TransferToken(address _Receipent, uint256 _Tokens) public {
        
        require(msg.sender != address(0),"Enter valid address");
        require(MyBalance[msg.sender] >= _Tokens, "Not have sufficient tokens to transfer");
        
        MyBalance[_Receipent] += _Tokens;
        MyBalance[msg.sender] -= _Tokens;
        
        emit _Transfer(_Receipent, _Tokens);
    }
    
    function myAllowance (address _Receipent, uint256 _Tokens) public {
        
        require(_Receipent != address(0),"Enter valid address");
        require(MyBalance[msg.sender] >= _Tokens, "Not have sufficient tokens to transfer");
        
        Allowance[msg.sender][_Receipent] += _Tokens;
        
        emit _Approved(msg.sender, _Receipent, _Tokens);
    }
    
    function TransferFrom (address _Owner, address _To, uint256 _Tokens) public {
        
        require(Allowance[_Owner][msg.sender] >= _Tokens, "Not have enough approval");
        require(MyBalance[_Owner] >= _Tokens, "Not have enough tokens");
        
        MyBalance[_Owner] -= _Tokens;
        Allowance[_Owner][msg.sender] -= _Tokens;
        MyBalance[_To] += _Tokens;
        
        emit _TransferFrom(_Owner, _To, _Tokens);
    }
    
    function Balance() public view returns(uint256 _Balance){
    
        _Balance = MyBalance[msg.sender];
    
        // return _Balance;
    }
    
    //Only owner of the contract can check the ether balance
    function ethBalance() public view OnlyOwner(msg.sender) returns(uint256 _Balance){
    
        _Balance = (address(this).balance)/10**18;
    
    }
  
    function AllowanceBalance(address _Owner, address _Spender) public view returns(uint256 _Balance){
        
        _Balance = Allowance[_Owner][_Spender];
        
    }
    
    function totalSupply() public view returns(uint256 ){
        
        return TotalSupply;
        
    }
    
    
    function Mint(uint256 _Tokens) public OnlyOwner(msg.sender) {
        require(_Tokens > 0, "Please enter number of tokens to mint");
        require((TotalSupply + _Tokens) <= Caped, "Value encreased to capted value");
        
        TotalSupply += _Tokens;
        MyBalance[Owner] += _Tokens;
        emit _Transfer(msg.sender, _Tokens);

    }

    function Burn(uint256 _Tokens) public OnlyOwner(msg.sender) {
        require(MyBalance[Owner] >= _Tokens, "ERC20: burn Tokens exceeds balance");
        
        TotalSupply -= _Tokens;
        MyBalance[Owner] -= _Tokens;

        emit _Transfer(msg.sender, _Tokens);
    }
    
    function TransferOwnership(address NextOwner) public OnlyOwner(msg.sender){
        require(NextOwner != address(0), "Wrong address");
        uint256 RemainingTokens = MyBalance[Owner];
        MyBalance[NextOwner] += RemainingTokens;
        MyBalance[Owner] -= RemainingTokens;
        Owner = NextOwner;
    }
    
    function DelegatePower(address _Delegate) public OnlyOwner(msg.sender){
        require (_Delegate != address(0), "Invalid address");
        Delegated = _Delegate;
    }
    
    function ReturnTokens(uint256 _Tokens) public payable returns(uint256){
        require (MyBalance[msg.sender] >= _Tokens, "You have no balance tokens in your account");
        
        uint256 eth = (_Tokens/TokenConversion)*(10**18);
        MyBalance[Owner] += _Tokens;
        MyBalance[msg.sender] -= _Tokens;
        payable(msg.sender).transfer(eth);
        
        emit _Transfer(msg.sender, eth);
        
        return eth;
        
    }
    
    receive () external payable {
      
        emit _ValueReceived (msg.sender, msg.value);
    
    }
    
    fallback () external payable {

        IssueToken(msg.sender, msg.value, ReleaseTime);
        
    }
    
    
}