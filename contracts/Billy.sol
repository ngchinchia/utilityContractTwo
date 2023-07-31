// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract Billy {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getBalances(address walletAddress, address[] calldata tokens)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory balances = new uint256[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            address tokenAddress = tokens[i];
            IERC20 token = IERC20(tokenAddress);
            balances[i] = token.balanceOf(walletAddress);
        }
        return balances;
    }
}
