// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "contracts/ERC20.sol";

contract MyToken is ERC20("Ahsan" , "ASN") {
    address owner ;

    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function mintByOwner(uint _amount) external  onlyOwner {
        mint(_amount);
    }
    
}