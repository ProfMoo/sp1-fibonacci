use clap::Parser;
use sp1_sdk::HashableKey;
use sp1_sdk::{include_elf, ProverClient};

/// The ELF (executable and linkable format) file for the Succinct RISC-V zkVM.
pub const FIBONACCI_ELF: &[u8] = include_elf!("fibonacci-program");

/// The arguments for the command.
#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Args {
    #[clap(long)]
    execute: bool,

    #[clap(long)]
    prove: bool,

    #[clap(long, default_value = "25")]
    n: u32,
}

fn main() {
    // Setup the logger.
    sp1_sdk::utils::setup_logger();

    // Setup the prover client.
    let client = ProverClient::from_env();

    let (pk, vk) = client.setup(FIBONACCI_ELF);

    println!("Verifying Key: {}", vk.bytes32());
}
