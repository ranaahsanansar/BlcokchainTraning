// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "contracts/ERC20.sol";

contract LockingStaking {
    address public owner;
    uint256 constant FIX_FEE = 2;
    address feeAddress;
    uint256 MAX_STAKES;

    uint256[3] periods = [1 minutes, 2 minutes, 3 minutes];

    uint256[3] rewardsPool = [1000, 2000, 3000];

    uint8[3] rates = [10, 20, 30];

    Stake[] stakes;

    mapping(address => uint256[]) private  stakesOf;
    mapping(uint256 => address) private  ownerOf;

    ERC20 token;

    constructor(
        address _token,
        address _feeAddress,
        uint256 _maxStakes
    ) {
        owner = msg.sender;
        token = ERC20(_token);
        feeAddress = _feeAddress;
        MAX_STAKES = _maxStakes;
    }

    struct Stake {
        uint256 amount;
        uint256 timeStamp;
        uint8 offerIndex;
        bool isActive;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the Owner");
        _;
    }

    // ------------------------------------
    //  Functions for Owner
    // ------------------------------------

    function increaseCoinsInRewardPool(uint8 _index, uint256 _amount)
        public
        onlyOwner
    {
        token.transferFrom(msg.sender, address(this), _amount);
        rewardsPool[_index] += _amount;
    }

    function changeFeeAddress(address _newAddress) external onlyOwner {
        feeAddress = _newAddress;
    }

    // ------------------------------------
    // View Functions
    // ------------------------------------

    function getfeeAddress() public view returns (address) {
        return feeAddress;
    }

    // myStakes 
    function getStakesOf(address _userAddress)
        public
        view
        returns (uint256[] memory)
    {
        return stakesOf[_userAddress];
    }

    function getOwnerOfStake(uint256 _stakeIndex)
        public
        view
        returns (address)
    {
        return ownerOf[_stakeIndex];
    }

    function getStakesLength() public view returns (uint256 _length) {
        return stakes.length;
    }

    function myActiveStakesCount(address _stakeHolder) view public returns (uint) {
        uint count = 0 ;
        for (uint i =0 ; stakesOf[_stakeHolder].length > i ; i++) 
        {
            if(stakes[stakesOf[_stakeHolder][i]].isActive){
                count++ ;
            }
            
        }
        return count;
    }

    

    // ------------------------------------
    // Functions for User
    // ------------------------------------

    event StakeLogs(
        address indexed _stakeHolder,
        uint256 _amount,
        uint256 _stakeIndex,
        uint256 _periodInseconds,
        uint8 _profitPercentageRate,
        uint256 _time
    );

    function stake(uint256 _amount, uint8 _index) public {
        require(
            getStakesLength() <= MAX_STAKES,
            "Limit reached, No more user can stake"
        );
        token.transferFrom(msg.sender, address(this), _amount);
        stakes.push(Stake(_amount, block.timestamp, _index, true));
        uint256 stakedIndex = stakes.length - 1;

        stakesOf[msg.sender].push(stakedIndex);
        ownerOf[stakedIndex] = msg.sender;
        emit StakeLogs(
            msg.sender,
            _amount,
            stakedIndex,
            periods[_index],
            rates[_index],
            block.timestamp
        );
    }

    event RewardsLogs(
        address indexed _stakeHolder,
        uint256 _reward,
        uint256 _time,
        uint256 stakedTime
    );

    function claimReward(uint256 _stakeIndex) public {
        // address requestSender = msg.sender;
        require(
            getOwnerOfStake(_stakeIndex) == msg.sender,
            "You are not the Owner of this Stake"
        );
        Stake memory stakedObject = stakes[_stakeIndex];
        require(stakedObject.isActive , "This stake is deactivate");
        uint256 stakedSeconds = block.timestamp - stakedObject.timeStamp;
        uint256 periodIndexValue = periods[stakedObject.offerIndex];
        require(
            stakedSeconds >= periodIndexValue,
            "Your Reward is not generated!"
        );
        uint256 numberOfRewards = stakedSeconds / periodIndexValue;

        uint256 percentageValue = (stakedObject.amount *
            rates[stakedObject.offerIndex]) / 100;
        uint256 totalReward = percentageValue * numberOfRewards;
        require(
            rewardsPool[stakedObject.offerIndex] >= totalReward,
            "Enogh coins in RewardPool please contact to the Authority"
        );
        rewardsPool[stakedObject.offerIndex] -= totalReward;
        stakes[_stakeIndex].timeStamp = block.timestamp;

        token.transferFrom(owner, msg.sender, totalReward);
        emit RewardsLogs(
            msg.sender,
            totalReward,
            block.timestamp,
            stakedSeconds
        );

    }

    function unStake(uint _stakeIndex) public  {
        require(
            getOwnerOfStake(_stakeIndex) == msg.sender,
            "You are not the Owner of this Stake"
        );
        claimReward(_stakeIndex);
        Stake memory stakedObject = stakes[_stakeIndex];
        uint256 fee = ( stakedObject.amount * FIX_FEE ) / 100 ;

        uint256 returnAmmount = stakedObject.amount - fee;
        delete stakes[_stakeIndex];

        token.transfer(msg.sender,  returnAmmount);

        token.transfer(feeAddress, fee);
        delete stakedObject ;
        delete ownerOf[_stakeIndex];

        for (uint i =0 ; stakesOf[msg.sender].length > i ; i++) 
        {
            if(stakesOf[msg.sender][i] == _stakeIndex){
                stakesOf[msg.sender][i] = stakesOf[msg.sender][stakesOf[msg.sender].length - 1];
                stakesOf[msg.sender].pop();
                break ;
            }
            
        }

    }
}
