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
  // Connect to Base Sepolia
  const provider = new ethers.JsonRpcProvider(
    "https://api.developer.coinbase.com/rpc/v1/base-sepolia/CMcqXiGfXqO5vWzAbfKEYegCFxQSD7lI"
  );

  // Your contract address
  const contractAddress = "0x6dBCFcf6A8a05EC6b77494e4717F116703D64c0C";

  // Create contract instance
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Example values from your README
  const publicValues =
    "0x00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000001a6d0000000000000000000000000000000000000000000000000000000000002ac2";
  const proofBytes =
    "0x09069090287c42583708a57a595644ffd85c7065eb7c48031884788540472077eddbbcbf212b0aab1f8469fec85f6dc455db14cc6130b6517fc1796c1c750f4e23cd340b0a84f80181559bca1e2407bf653681ae7bce64136a38bc8a26385d07cceb9c5a1b854100f4118e69615868e9cac78b5366f1531d29c2337546430e7df8f53f1f2c52d7c4639072df077babaafff140ede078d9254132b91e8306d943f49818bd0ab245c053f8de301256856511daaf0232ec089dfbd17a3b548109016193da37264849523e4bebb39b721b0c3a959859608e5dd71ff749088c656314695a30ab07d00488a66a227359a7b3ea5369eb1d54c1278e593b8de672a532e90b4c1874";

  try {
    const result = await contract.verifyFibonacciProof(
      publicValues,
      proofBytes
    );
    console.log("Verification Result:", {
      n: result[0],
      a: result[1],
      b: result[2],
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
