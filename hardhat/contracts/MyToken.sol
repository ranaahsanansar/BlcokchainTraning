// SPDX-License-Identifier: none
pragma solidity >=0.7.0 <0.9.0;

import "contracts/ERC20.sol";

contract MyToken is ERC20 {
    address owner ;
 
    // constructor() {
    //     owner = msg.sender;
    // }

    function initialize(uint8 _dec ) external {
        Name = "Ahsan";
        Symbol = "ASN";
        owner = 0xf6F304847c55f0EcC3c55640FBcDe615b08fE30e;
        decimal = _dec ; 
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function mintByOwner(uint _amount) external  onlyOwner {
        mint(_amount);
    }
    
}