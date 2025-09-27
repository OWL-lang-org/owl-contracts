# OWL NFT Contract

This project contains an ERC-721 NFT contract called "OWL" deployed on World Chain Sepolia testnet.

## 📋 Contract Features

- **Name**: OWL
- **Symbol**: OWL
- **Standard**: ERC-721 with URIStorage extensions
- **Features**:
  - NFT minting (owner only)
  - Token URI updates (owner only)
  - IPFS base URI configured

## 🚀 Deployment on World Chain Sepolia

### Prerequisites

1. **Node.js and npm** installed
2. **Test ETH** on World Chain Sepolia
3. **Private key** from a wallet

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   ```bash
   cp env.example .env
   ```
   
   Edit the `.env` file and add your private key:
   ```
   PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
   ```

3. **Get test ETH**:
   - Visit the faucet: https://www.datawallet.com/es/cripto/get-world-chain-testnet-tokens
   - Connect your wallet and request test ETH

### Deployment

1. **Compile the contract**:
   ```bash
   npx hardhat compile
   ```

2. **Deploy to World Chain Sepolia**:
   ```bash
   npx hardhat run scripts/deploy.ts --network worldChainSepolia
   ```

3. **Verify the contract** (optional):
   ```bash
   npx hardhat verify --network worldChainSepolia <CONTRACT_ADDRESS>
   ```

### Network Information

- **Name**: World Chain Sepolia
- **RPC URL**: https://sepolia-rpc.worldchain.org
- **Chain ID**: 4801
- **Explorer**: https://sepolia.worldscan.org
- **Faucet**: https://www.datawallet.com/es/cripto/get-world-chain-testnet-tokens

## 🧪 Testing

Run the tests:
```bash
npx hardhat test
```

## 📝 Useful Commands

```bash
# Help
npx hardhat help

# Compile
npx hardhat compile

# Tests
npx hardhat test

# Local network
npx hardhat node

# Deploy to local network
npx hardhat run scripts/deploy.ts --network localhost
```

## 🔒 Security

- **NEVER** share your private key
- **NEVER** upload the `.env` file to a public repository
- Always use testnets for development and testing
