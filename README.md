# SP1 Fibonacci

The repo is based heavily on [the quickstart guide](https://docs.succinct.xyz/docs/getting-started/quickstart).

In summary, this repo has 3 components:

1. Generates a proof of a Fibonacci program using SP1. The [SP1](https://github.com/succinctlabs/sp1) project can generate a proof of any RISC-V program.

2. Deploys a contract to Base Sepolia that is used for verifying proofs

3. Runs a verification of the proof against the deployed contract on Base Sepolia.

## Running the Project

Ensure [all the tools are installed](https://docs.succinct.xyz/docs/getting-started/install)

### Build a Fibonacci Executable

To build the Fibonacci program:

```sh
cd program
cargo prove build
```

This builds an executable of the Fibonacci function, but doesn't actually execute it.

### Execute the Fibonacci Program

To run the program without generating a proof:

```sh
cd script
cargo run --release -- --execute
```

This will execute the Fibonacci program and display the output (no proofs involved).

### Generate an EVM-Compatible Proof

> [!WARNING]
> You will need at least 128GB RAM to generate a Groth16 or PLONK proof locally.

To generate a proof that is small enough to be verified on-chain and verifiable by the EVM:

```sh
cd script
cargo run --release --bin evm -- --system groth16
```

this will generate a Groth16 proof. If you want to generate a PLONK proof, run the following command:

```sh
cargo run --release --bin evm -- --system plonk
```

These commands will also generate fixtures that can be used to test the verification of SP1 zkVM proofs inside Solidity.

### Retrieve the Verification Key

To retrieve your `programVKey` for your on-chain contract, run the following command:

```sh
cargo prove vkey --program fibonacci-program
```

### Using the Prover Network

We highly recommend using the Succinct prover network for any non-trivial programs or benchmarking purposes. For more information, see the [setup guide](https://docs.succinct.xyz/generating-proofs/prover-network.html).

To get started, copy the example environment file:

```sh
cp .env.example .env
```

Then, set the `SP1_PROVER` environment variable to `network` and set the `SP1_PRIVATE_KEY`
environment variable to your whitelisted private key.

To generate an EVM-compatible proof using the prover network, run the following
command:

```sh
SP1_PROVER=network NETWORK_PRIVATE_KEY=... cargo run --release --bin evm
```

## My Output

My deployed contract: <https://sepolia.basescan.org/address/0x2c57d7251f900afc4527ae5cd3dc66be729b01ea>
Verifier I used onchain: `0x397A5f7f3dBd538f23DE225B51f532c34448dA9B`

My `programVKey` (i.e. program verfication key): `0x00a10dc86319b7fa6c59de356b9edb4f4be468c337b025a8c0d1e519a6412abf`

My generated proof info:

### SP1 3.x Proof

```text
Verification Key: 0x00b3e5fa2806934044b7ae72945e6439aa6baf3864686652f7a0e365981837fa
Public Values: 0x00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000001a6d0000000000000000000000000000000000000000000000000000000000002ac2
Proof Bytes: 0x09069090287c42583708a57a595644ffd85c7065eb7c48031884788540472077eddbbcbf212b0aab1f8469fec85f6dc455db14cc6130b6517fc1796c1c750f4e23cd340b0a84f80181559bca1e2407bf653681ae7bce64136a38bc8a26385d07cceb9c5a1b854100f4118e69615868e9cac78b5366f1531d29c2337546430e7df8f53f1f2c52d7c4639072df077babaafff140ede078d9254132b91e8306d943f49818bd0ab245c053f8de301256856511daaf0232ec089dfbd17a3b548109016193da37264849523e4bebb39b721b0c3a959859608e5dd71ff749088c656314695a30ab07d00488a66a227359a7b3ea5369eb1d54c1278e593b8de672a532e90b4c1874
```

<https://explorer.succinct.xyz/proof/01jftfw3haek0s24114jzk0vzf>

### SP1 4.x Proof

```text
Proof System: Groth16
Verification Key: 0x00a10dc86319b7fa6c59de356b9edb4f4be468c337b025a8c0d1e519a6412abf
Public Values: 0x00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000001a6d0000000000000000000000000000000000000000000000000000000000002ac2
Proof Bytes: 0x11b6a09d004bbc3bebb32e151f729c81dcecc9b92e80584f0b463b90f53b000729945901069d604bfcbcfc8a85380ba5fa280c2ceb84276be6d162c6be869c519447a34628e4b041fa0e64c7c9c6893b89a3e10370813784a85f55f2fec37e7c429a44d021b6eac57d7515f8e9b90c8cfd970ffc91b3e70a5ddd9c3d3d38978576f52b520cf2259f01d406472a5c102f3220edb1257accd344b96aa98fd3a92ab45fa8c0281c17b317b1bc22cd08446b812bffbdf08842de3e75680141bdc6cc2a2927b81ad86a6388f8309e53a5bc8e6b17a7b3b2ed7cd81d292c4176e11970c858bbce19cc2ff5e3ee2920ccbc4ef6a17b70a834948d62a2a7d8f04f0cd1e59d439f51
```
