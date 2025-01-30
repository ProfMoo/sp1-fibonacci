import { ethers } from "ethers";

// ABI fragment for the function we need
const abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_verifier",
        type: "address",
        internalType: "address",
      },
      {
        name: "_fibonacciProgramVKey",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fibonacciProgramVKey",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifier",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifyFibonacciProof",
    inputs: [
      {
        name: "_publicValues",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_proofBytes",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
];

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const contractAddress = "0xC1BD513c00Cd5FB2b4de1f8ad43a32629650DE43";

  // Look up the current block number (i.e. height)
  const blockNumber = await provider.getBlockNumber();
  console.log("Block number:", blockNumber);

  // Example values from your README
  const publicValues =
    "0x00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000001a6d0000000000000000000000000000000000000000000000000000000000002ac2";
  const proofBytes =
    "0x11b6a09d004bbc3bebb32e151f729c81dcecc9b92e80584f0b463b90f53b000729945901069d604bfcbcfc8a85380ba5fa280c2ceb84276be6d162c6be869c519447a34628e4b041fa0e64c7c9c6893b89a3e10370813784a85f55f2fec37e7c429a44d021b6eac57d7515f8e9b90c8cfd970ffc91b3e70a5ddd9c3d3d38978576f52b520cf2259f01d406472a5c102f3220edb1257accd344b96aa98fd3a92ab45fa8c0281c17b317b1bc22cd08446b812bffbdf08842de3e75680141bdc6cc2a2927b81ad86a6388f8309e53a5bc8e6b17a7b3b2ed7cd81d292c4176e11970c858bbce19cc2ff5e3ee2920ccbc4ef6a17b70a834948d62a2a7d8f04f0cd1e59d439f51";

  // Create typed contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  try {
    const tx = await contract.verifyFibonacciProof(publicValues, proofBytes, {
      gasLimit: 1000000,
    });

    console.log(tx);
  } catch (error) {
    console.error(error);
  }
}

main();
