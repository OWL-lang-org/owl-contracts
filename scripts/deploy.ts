import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Starting OWL NFT contract deployment on World Chain Sepolia...");

  // Get the deployer
  const [deployer] = await ethers.getSigners();
  console.log("📝 Deploying with account:", deployer.address);

  // Check balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", ethers.formatEther(balance), "ETH");

  if (balance === 0n) {
    console.log("⚠️  Warning: Your account has no ETH. You need test ETH to deploy.");
    console.log("🔗 World Chain Sepolia Faucet: https://www.datawallet.com/es/cripto/get-world-chain-testnet-tokens");
  }

  // Get the contract factory
  const OWL = await ethers.getContractFactory("OWL");
  console.log("📦 Compiling OWL contract...");

  // Deploy the contract
  // Constructor requires an initial address as owner
  const initialOwner = deployer.address;
  console.log("👤 Initial owner:", initialOwner);

  const owl = await OWL.deploy(initialOwner);
  await owl.waitForDeployment();

  const contractAddress = await owl.getAddress();
  console.log("✅ OWL contract deployed successfully!");
  console.log("📍 Contract address:", contractAddress);
  console.log("🔗 Block explorer:", `https://sepolia.worldscan.org/address/${contractAddress}`);

  // Verify the owner
  const owner = await owl.owner();
  console.log("👑 Contract owner:", owner);

  // Additional information
  console.log("\n📋 Contract information:");
  console.log("   - Name: OWL");
  console.log("   - Symbol: OWL");
  console.log("   - Base URI: https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/");
  console.log("   - Owner:", owner);

  console.log("\n🎉 Deployment completed successfully!");
  console.log("\n📝 Next steps:");
  console.log("   1. Verify the contract on the block explorer");
  console.log("   2. Test the safeMint() function to create NFTs");
  console.log("   3. Configure your frontend to interact with the contract");
}

// Execute the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error during deployment:", error);
    process.exit(1);
  });
