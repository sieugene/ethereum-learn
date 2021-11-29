var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];
var contractAddress = "0x0E81591E1140E669cd2105f8c3002235a16D4a7E";
const web3 = new Web3("http://127.0.0.1:9545/");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);
document.addEventListener("DOMContentLoaded", () => {
  helloWorld.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("hello").innerHTML = result;
    });
});
