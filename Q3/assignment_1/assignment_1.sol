pragma solidity ^0.8.0;

contract ParentVehicle{
    
    function start() public pure returns (string memory){
        return "The Vehicle has just Started";
    }
    
    function accelerate() public pure returns (string memory){
        return "The Vehicle has just Accelerated";
    }
    
    function stop() public pure returns (string memory){
        return "The Vehicle has just Stopped";
    }
    
    function service() public virtual returns (string memory){
        return "The Vehicle is being serviced";
    }
    
}

contract Car is ParentVehicle{
    
    function service() public pure override returns (string memory){
        return "Car Vehicle is being serviced";
    }
}

contract Truck is ParentVehicle{
    
    function service() public pure override returns (string memory){
        return "Truck Vehicle is being serviced";
    }
}

contract MotorCycle is ParentVehicle{
    
    function service() public pure override returns (string memory){
        return "MotorCycle Vehicle is being serviced";
    }
}


contract AltoMehran is Car {
    
    function serviceStation(address adrs) public pure returns (string memory){
        AltoMehran car = AltoMehran(adrs);
        return car.service();
    }
    
}

contract Hino is Truck {
    function serviceStation(address adrs) public pure returns (string memory){
        Hino truck = Hino(adrs);
        return truck.service();
    }
    
}

contract Yamaha is MotorCycle {
    function serviceStation(address adrs) public pure returns (string memory){
        Yamaha bike = Yamaha(adrs);
        return bike.service();
    }
    
}

