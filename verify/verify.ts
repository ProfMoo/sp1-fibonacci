import { ethers } from "ethers";

// ABI fragment for the function we need
const abi = No files changed, compilation skipped
Contract: Fibonacci
Transaction: {
  "from": "0x2c57d7251f900afc4527ae5cd3dc66be729b01ea",
  "to": null,
  "maxFeePerGas": "0xc6b8",
  "maxPriorityFeePerGas": "0xc44a",
  "gas": "0x4468a",
  "input": "0x6080604052348015600e575f5ffd5b506040516103c33803806103c3833981016040819052602b916052565b5f80546001600160a01b0319166001600160a01b0393909316929092179091556001556087565b5f5f604083850312156062575f5ffd5b82516001600160a01b03811681146077575f5ffd5b6020939093015192949293505050565b61032f806100945f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c806321bd7afc146100435780632b7ac3f314610082578063ab26fbd1146100ac575b5f5ffd5b61005661005136600461019d565b6100c3565b6040805163ffffffff948516815292841660208401529216918101919091526060015b60405180910390f35b5f54610094906001600160a01b031681565b6040516001600160a01b039091168152602001610079565b6100b560015481565b604051908152602001610079565b5f805460015460405163020a49e360e51b8152839283926001600160a01b03909116916341493c6091610100918b908b908b908b90600401610231565b5f6040518083038186803b158015610116575f5ffd5b505afa158015610128573d5f5f3e3d5ffd5b505f925061013b91505087890189610281565b80516020820151604090920151909a919950975095505050505050565b5f5f83601f840112610168575f5ffd5b50813567ffffffffffffffff81111561017f575f5ffd5b602083019150836020828501011115610196575f5ffd5b9250929050565b5f5f5f5f604085870312156101b0575f5ffd5b843567ffffffffffffffff8111156101c6575f5ffd5b6101d287828801610158565b909550935050602085013567ffffffffffffffff8111156101f1575f5ffd5b6101fd87828801610158565b95989497509550505050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b858152606060208201525f61024a606083018688610209565b828103604084015261025d818587610209565b98975050505050505050565b803563ffffffff8116811461027c575f5ffd5b919050565b5f6060828403128015610292575f5ffd5b506040516060810167ffffffffffffffff811182821017156102c257634e487b7160e01b5f52604160045260245ffd5b6040526102ce83610269565b81526102dc60208401610269565b60208201526102ed60408401610269565b6040820152939250505056fea264697066735822122041833bee73d6143e4915243e5accc7eea67ea7a9871a8292a2e9cc54bbbd6ac264736f6c634300081c0033000000000000000000000000397a5f7f3dbd538f23de225b51f532c34448da9b00620892344c310c32a74bf0807a5c043964264e4f37c96a10ad12b5c9214e0e",
  "nonce": "0x1",
  "chainId": "0x14a34"
}
ABI: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_verifier",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_fibonacciProgramVKey",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fibonacciProgramVKey",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifier",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifyFibonacciProof",
    "inputs": [
      {
        "name": "_publicValues",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "_proofBytes",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint32",
        "internalType": "uint32"
      },
      {
        "name": "",
        "type": "uint32",
        "internalType": "uint32"
      },
      {
        "name": "",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "stateMutability": "view"
  }
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
