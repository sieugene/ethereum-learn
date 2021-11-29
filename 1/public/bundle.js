var contractABI = [];
var contractAddress = "0x0E81591E1140E669cd2105f8c3002235a16D4a7E";

var web3 = new Web3("http://127.0.0.1:9545/");
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
