import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    worldChainSepolia: {
      url: "https://worldchain-sepolia.drpc.org",
      chainId: 4801,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      worldChainSepolia: process.env.ETHERSCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "worldChainSepolia",
        chainId: 4801,
        urls: {
          apiURL: "https://sepolia.worldscan.org/api",
          browserURL: "https://sepolia.worldscan.org",
        },
      },
    ],
  },
};

export default config;
