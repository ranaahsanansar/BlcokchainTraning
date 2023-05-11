// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address _owner) external view returns (uint256 balance);

    function transfer(address _to, uint256 _value)
        external
        returns (bool success);

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool success);

    function approve(address _spender, uint256 _value)
        external
        returns (bool success);

    function allowance(address _owner, address _spender)
        external
        view
        returns (uint256 remaining);
}

contract ERC20 is IERC20 {
    
    string private Name;
    string private Symbol;
    uint8 decimal = 18;

    uint256 internal TotalSupply;

    mapping(address => uint256) internal  balancesArray;

    mapping(address => mapping(address => uint256)) private allowanceArray;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    constructor(
        string memory _name,
        string memory _symbol
    ) {
        Name = _name;
        Symbol = _symbol;
    }

    function name() public view returns (string memory) {
        return Name;
    }

    function symbol() public view returns (string memory) {
        return Symbol;
    }

    function decimals() public view returns (uint8) {
        return decimal;
    }

    function totalSupply() public view returns (uint256) {
        return TotalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balancesArray[_owner];
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        uint256 currentBalance = balancesArray[msg.sender];
        uint256 _transferValue = _value ;
        require(
            _transferValue <= currentBalance,
            "Amount should be less then available balance"
        );
        unchecked {
            balancesArray[msg.sender] -= _transferValue;
            balancesArray[_to] += _transferValue;
            return true;
        }
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool success) {
        uint256 allowedBalance = allowanceArray[_from][msg.sender];
        require(_value  <= allowedBalance, "Allowance reached maximum limit");
        allowanceArray[_from][msg.sender] -= _value ;
        balancesArray[_from] -= _value;
        balancesArray[_to] += _value ;
        return true;
    }

    function approve(address _spender, uint256 _value)
        external
        returns (bool success)
    {
        allowanceArray[msg.sender][_spender] = _value ;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender)
        external
        view
        returns (uint256 remaining)
    {
        return allowanceArray[_owner][_spender];
    }

    function mint(uint256 _amount) internal   {
        balancesArray[msg.sender] += _amount ;
        TotalSupply += _amount;
    }


    
}
