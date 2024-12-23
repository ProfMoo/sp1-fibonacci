# SP1 Fibonacci

I used [the quickstart guide](https://docs.succinct.xyz/docs/getting-started/quickstart) to get this repo up and running. This repo generates a proof of a Fibonacci program using SP1. [SP1](https://github.com/succinctlabs/sp1) project that can generate a proof of any RISC-V program.

My deployed contract: <https://sepolia.basescan.org/address/0x2c57d7251f900afc4527ae5cd3dc66be729b01ea>
Verifier I used onchain: `0x397A5f7f3dBd538f23DE225B51f532c34448dA9B`

My program verification key: `0x00620892344c310c32a74bf0807a5c043964264e4f37c96a10ad12b5c9214e0e`

My generated proof info:

```text
Verification Key: 0x00b3e5fa2806934044b7ae72945e6439aa6baf3864686652f7a0e365981837fa
Public Values: 0x00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000001a6d0000000000000000000000000000000000000000000000000000000000002ac2
Proof Bytes: 0x09069090287c42583708a57a595644ffd85c7065eb7c48031884788540472077eddbbcbf212b0aab1f8469fec85f6dc455db14cc6130b6517fc1796c1c750f4e23cd340b0a84f80181559bca1e2407bf653681ae7bce64136a38bc8a26385d07cceb9c5a1b854100f4118e69615868e9cac78b5366f1531d29c2337546430e7df8f53f1f2c52d7c4639072df077babaafff140ede078d9254132b91e8306d943f49818bd0ab245c053f8de301256856511daaf0232ec089dfbd17a3b548109016193da37264849523e4bebb39b721b0c3a959859608e5dd71ff749088c656314695a30ab07d00488a66a227359a7b3ea5369eb1d54c1278e593b8de672a532e90b4c1874
```

And the proof generation process in the explorer: <https://explorer.succinct.xyz/proof/01jftfw3haek0s24114jzk0vzf>

## Requirements

- [Rust](https://rustup.rs/)
- [SP1](https://docs.succinct.xyz/getting-started/install.html)

## Running the Project

There are four main ways to run this project: build a program, execute a program, generate a core proof, and generate an EVM-compatible proof.

### Build the Program

To build the program, run the following command:

```sh
cd program
cargo prove build
```

### Execute the Program

To run the program without generating a proof:

```sh
cd script
cargo run --release -- --execute
```

This will execute the program and display the output.

### Generate a Core Proof

To generate a core proof for your program:

```sh
cd script
cargo run --release -- --prove
```

### Generate an EVM-Compatible Proof

> [!WARNING]
> You will need at least 128GB RAM to generate a Groth16 or PLONK proof.

To generate a proof that is small enough to be verified on-chain and verifiable by the EVM:

```sh
cd script
cargo run --release --bin evm -- --system groth16
```

this will generate a Groth16 proof. If you want to generate a PLONK proof, run the following command:

```sh
cargo run --release --bin evm -- --system plonk
```

These commands will also generate fixtures that can be used to test the verification of SP1 zkVM proofs
inside Solidity.

### Retrieve the Verification Key

To retrieve your `programVKey` for your on-chain contract, run the following command:

```sh
cargo prove vkey --program fibonacci-program
```

## Using the Prover Network

We highly recommend using the Succinct prover network for any non-trivial programs or benchmarking purposes. For more information, see the [setup guide](https://docs.succinct.xyz/generating-proofs/prover-network.html).

To get started, copy the example environment file:

```sh
cp .env.example .env
```

Then, set the `SP1_PROVER` environment variable to `network` and set the `SP1_PRIVATE_KEY`
environment variable to your whitelisted private key.

For example, to generate an EVM-compatible proof using the prover network, run the following
command:

```sh
SP1_PROVER=network SP1_PRIVATE_KEY=... cargo run --release --bin evm
```
