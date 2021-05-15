pragma solidity ^0.4.17;

// contract is like a class in Java - we deploy instances of a class
contract Inbox {
    // storage variable (like an instance variable)
    string public message;
    
    //this function has exact same spelling as contract name 
    // so this is a constructor function 
    // constructor functions are automatically called when we deploy our contract to the blockchain
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    // these remaining functions are called on the contract after we deploy
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    // there is a price in "gas" of each operation
    // different amounts of spend for different operations
    // function doMath(int a, int b){
    //     a + b; //3 gas
    //     b - a; //3 gas
    //     a*b; //5 gas
    //     a==0; //3 gas
    //     // we need 14 gas 
    //     // but if our gas limit is 10 - the execution of our function would immediately halt before 11 gas (a*b is 5 gas)
        
    // }
    // we don't need this method bc "message" method takes care of it 
    // function getMessage() public view returns (string){
    //     return message;
    // }
}