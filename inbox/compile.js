// to read contents of hard drive
const path = require('path'); // path allows cross-platform compatibility (windows or unix)
const fs = require('fs');

const solc = require('solc');

// generates a path that point directly to inbox.sol file
// __dirname - a constant defined by node, always set to current working directory
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); 

// to read in contents of the file (inbox.sol file uses utf8 encoding)
const source = fs.readFileSync(inboxPath, 'utf8'); 

module.exports = solc.compile(source, 1).contracts[':Inbox']; // we export the entire object with contracts property

// console.log(solc.compile(source, 1));
// what this console log outputs:
// bytecode - the actual bytecode that gets deployed to ethereum network and executed on blockchain
// interface - our contract ABI - the communication layer between the solidity world and javascript world
// the abi just lists all the functions that can be called on the contract, along with return types