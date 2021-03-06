pragma solidity ^0.5.0;

contract Address{
    address payable private myAddress = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
    uint NoOfStudents;
    mapping (uint => StudentStruct)  Students;
    mapping(string => mapping(uint => StudentStruct)) Class;
    
    enum Gender { Male, Female } 
    enum ClassType { Online, Onsite }
    
    
    struct StudentStruct {
        string name;
        address ethAddress;
        bool hasDegree;
        Gender gender;
        ClassType classtype;
    }

    
    // function to create new students.
    // function setStudent(uint _id, string memory _name, bool _hasDegree) public {
    //     Students[_id] = StudentStruct({name: _name, ethAddress: msg.sender, hasDegree: _hasDegree});
    // }
    
    // function to get Stuck created students.
    // function getStudent(uint _id) public view returns (string memory, address, bool){
    //     return (Students[_id].name, Students[_id].ethAddress, Students[_id].hasDegree);
    // }
    
    // function to create new students.
    function enrollStudentInClass(string memory _class, uint _id, string memory _name, bool _hasDegree, Gender _gender, ClassType _classtype) public payable {
        //require(msg.value > 2, "Not enough balance");
        Class[_class][_id] = StudentStruct({name: _name, ethAddress: msg.sender,hasDegree: _hasDegree, gender: _gender, classtype: _classtype});
        NoOfStudents += 1;
    }
    
    // function to get Stuck created students.
    function getEnrolledStudent(uint _id, string memory _class) public view returns (string memory, address, bool, Gender, ClassType){
        return (Class[_class][_id].name, Class[_class][_id].ethAddress, Class[_class][_id].hasDegree, Class[_class][_id].gender, Class[_class][_id].classtype);
    }
    
    function getNoOfStudents () public view returns (uint){
        return NoOfStudents;
    }
    
    function setAddress(address payable add) public {
        myAddress = add;
    }

    function getBalance() public view returns(uint){
        return myAddress.balance;
    }
    
    function getAddress() public view returns(address){
        return myAddress;
    }
    
    function pay() public payable{
        myAddress.transfer(msg.value);
    }
    
}