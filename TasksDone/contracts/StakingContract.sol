// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "contracts/ERC20.sol";

contract Staking{
    address Owner;

    // struct StakeHolderInfo {
    //     uint256 Amount;
    //     uint256 TimeStamp;
    // }

    ERC20 token;

    mapping(address => uint256) public staked;
    mapping(address => uint256) public lastTimeStamp;

    // mapping(address => StakeHolderInfo) stakedHoldersArray;

    constructor(address _tokenAddress) {
        Owner = msg.sender;
        token = ERC20(_tokenAddress);
    }

    // function increaceMintedTokens(address _to, uint256 _value) external {
    //     require(Owner == msg.sender, "Only Owner can do this operation");
    //     transfer(_to, _value);
    // }

    event StakeByUser(address indexed _user , uint _amount);

    function stake(uint256 _amount) public {
        uint256 _amountToBeStake = _amount;
        require(
            token.balanceOf(msg.sender) >= _amountToBeStake,
            "Insuficiant Balance"
        );

        // token.transfer(address(this), _amountToBeStake);
        token.transferFrom(msg.sender, address(this) , _amount);
        staked[msg.sender] += _amountToBeStake;
        lastTimeStamp[msg.sender] = block.timestamp;
        emit StakeByUser(msg.sender, _amount);
    }

    event ClaimByUsers(address indexed _user , uint256 _reward);

    function claim() public {
        require(staked[msg.sender] > 0, "Zero Staked Coins");
        uint256 stakedSeconds = block.timestamp - lastTimeStamp[msg.sender];
        require(stakedSeconds >= 180, "Come Back After 3 Mintues");
        uint256 numberOfRewards = stakedSeconds / 180;
        uint256 totalReward = ((staked[msg.sender] * 20) / 100) *
            numberOfRewards;
        lastTimeStamp[msg.sender] = block.timestamp;
        // transfer(msg.sender, totalReward);
        token.transfer(msg.sender, totalReward);
        emit ClaimByUsers(msg.sender, totalReward);
    }

    function unstake() public {
        require(staked[msg.sender] > 0, "You have zero staked coins");
        // require(
        //     balancesArray[address(this)] >= staked[msg.sender],
        //     "This Contract has no enogh coins to return"
        // );
        // balancesArray[address(this)] -= staked[msg.sender];
        uint stakedCoins = staked[msg.sender] ;
        delete staked[msg.sender];
        token.transfer(msg.sender, stakedCoins);
        delete lastTimeStamp[msg.sender];
        // balancesArray[msg.sender] += staked[msg.sender];
    }
}
