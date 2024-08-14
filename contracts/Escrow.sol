// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Escrow {
  address public owner;
  uint public balance;
  constructor() {
    owner = msg.sender;
    balance = address(this).balance;
  }
}
