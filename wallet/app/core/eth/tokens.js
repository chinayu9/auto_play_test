_$define("app/core/eth/tokens", function (require, exports, module){
"use strict";
/**
 * ERC20 tokens that we are intrested in
 */

Object.defineProperty(exports, "__esModule", { value: true });
// Basic ERC20 interfaces
exports.minABI = [{
    constant: true,
    inputs: [{
        name: '_owner',
        type: 'address'
    }],
    name: 'balanceOf',
    outputs: [{
        name: 'balance',
        type: 'uint256'
    }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
}, {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{
        name: '',
        type: 'uint8'
    }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
}, {
    constant: false,
    inputs: [{
        name: '_to',
        type: 'address'
    }, {
        name: '_value',
        type: 'uint256'
    }],
    name: 'transfer',
    outputs: [{
        name: 'success',
        type: 'bool'
    }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
}, {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{
        name: '',
        type: 'uint256'
    }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
}];
})