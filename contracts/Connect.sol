pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


/**
* @title Connect
* @author Abhishek Vispute
*/
contract connect {
 
   address owner;

   modifier onlyowner
     {
         require(msg.sender==owner,"You are not allowed");
         _;
     }
   
   bytes32 d;

   struct DonUtil {
        uint256 amount;
        string cause;
    }

   mapping(address => uint256) donationsperuser;
   mapping(address => DonUtil []) userDonUtil; 
   mapping(address => string) regDonors;
   address [] regDonorsAdd;
   
   constructor()public{
        owner = msg.sender;
    }
   
   
   function login() public view returns (string memory)
   {
       return regDonors[msg.sender];
   }
   function signup (string memory _name)public
   {
     regDonors[msg.sender] = _name;
     regDonorsAdd.push(msg.sender);
   }
   
   function checkifowner() public view returns (bool)
   {
       if(msg.sender==owner) return true;
       else return false;
   }
   function donate(uint256 _amount) public 
   {
    //require reg user
    donationsperuser[msg.sender] = donationsperuser[msg.sender] + _amount;
   }
   
   function utilize(address _add, uint256 _amount, string memory _cause ) public
   {
     require(msg.sender == owner, "only owner can utilize funds");
     require(donationsperuser[_add] >= _amount,"Insufficient funds");
     donationsperuser[_add] = donationsperuser[_add] - _amount;
    
     DonUtil memory temp;
     temp.amount = _amount;
     temp.cause = _cause;
     
     userDonUtil[_add].push(temp);
   }
    

   
    
    function getDonationPerUser(address _add) public view returns(uint256)
    {
        return donationsperuser[_add];
    } 


    function getUserDonUtilPerUser(address _add) public view returns(DonUtil [] memory)
    {
        return userDonUtil[_add];
    } 

    function getAllUsers() public view returns(address [] memory)
    {
    return regDonorsAdd;
    }
    
    function destroySmartContract(address payable _to) public onlyowner {
    
    selfdestruct(_to);
    }
 
}