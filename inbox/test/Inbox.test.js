
// used for making assertions about tests
const assert = require('assert');

const ganache = require('ganache-cli');

// a constructor, used to create instances of the web3 library
// constructor is always capitalized
// web3 is how we get programmatic access into the ethereum network
const Web3 = require('web3');

// creates an instance of web3, tells the instance to attempt to connect to local test network
// the argument changes depending on what environment we want (like rinkby, etc)
const web3 = new Web3(ganache.provider());

// import bycode from our compile file
const {interface, bytecode} = require('../compile');

// mocha starts -> deploy new contract -> manipulate the contract -> makes an assertiona about the contract
// the ganache module automatically creates a set of accounts for us to use

let accounts;
let inbox;

beforeEach(async()=>{
    // get a list of all accounts
    // every function we call with web3 is async
    accounts = await web3.eth.getAccounts();

    // use one of those accounts to deploy the contract
    // access Contract constructor, argument is abi (interface bw solidity and javascript world) - pass in the interface (parse to get a javascript object)
    // then deploy the contract - doesn't actually deploy - creates the object that can be deployed
    // send deploys to the network
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!']})
        .send({ from: accounts[0], gas: '1000000' })

});

describe('Inbox', ()=>{
    it('deploys a contract', ()=>{
        // ok method checks if it's a defined value (truthy?)
        // address exists bc we sent it (successfully deployed)
        assert.ok(inbox.options.address);
    });

    it('has a default message', async()=>{
        // first set of parentheses - some way to customize the list of functions being passed to the function
        // second set of parentheses - customizes how this function gets called
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!')
    });

    it('can change the message', async()=>{
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});

