# **Multi-Chain Abstraction Layer**

A unified JavaScript library for interacting with multiple blockchains (EVM and non-EVM) using a single, consistent API. Supports Ethereum, Polygon, Avalanche, Solana, and Cosmos.

[![Test](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/test.yml/badge.svg)](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/test.yml)
[![CI](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/ci.yml/badge.svg)](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/ci.yml)
[![Release](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/release.yml/badge.svg)](https://github.com/aliezzahn/multi-chain-abstraction/actions/workflows/release.yml)


---

## **Installation**

### From GitHub Packages

This package is published to **GitHub Packages**. To install it:

1. **Create a `.npmrc` file**:
   In your project folder, create a file named `.npmrc` and add the following line:
   ```
   @aliezzahn:registry=https://npm.pkg.github.com
   ```

3. **Install the package**:
   Run the following command to install Web3 Utils:
   ```bash
   # Using Bun
   bun add @aliezzahn/multi-chain-abstraction
   
   # Using npm
   npm install @aliezzahn/multi-chain-abstraction
   
   # Using yarn
   yarn add @aliezzahn/multi-chain-abstraction
   
   # Using pnpm
   pnpm add @aliezzahn/multi-chain-abstraction
   ```

---

## **Features**

- **Unified API**: Interact with multiple blockchains using a single interface.
- **EVM Chains**: Supports Ethereum, Polygon, Avalanche, and other EVM-compatible chains.
- **Non-EVM Chains**: Supports Solana and Cosmos (with more chains coming soon).
- **Consistent Methods**: Use the same methods (`getBalance`, `sendTransaction`) across all chains.
- **Easy to Extend**: Add support for new chains by extending the base classes.

---

## **Usage**

### **1. Import the Library**
```javascript
import { MultiChain } from "@aliezzahn/multi-chain-abstraction";
```

### **2. Initialize a Chain**
Create an instance of `MultiChain` by specifying the chain type and RPC URL.

```javascript
const eth = new MultiChain("ethereum", "https://mainnet.infura.io/v3/YOUR_INFURA_KEY");
const polygon = new MultiChain("polygon", "https://polygon-rpc.com");
const solana = new MultiChain("solana", "https://api.mainnet-beta.solana.com");
```

### **3. Get Balance**
Fetch the balance of an address on the specified chain.

```javascript
const ethBalance = await eth.getBalance("0x0000000000000000000000000000000000000000");
console.log(`Ethereum Balance: ${ethBalance}`);

const solanaBalance = await solana.getBalance("11111111111111111111111111111111");
console.log(`Solana Balance: ${solanaBalance}`);
```

### **4. Send Transaction**
Send a signed transaction on the specified chain.

```javascript
const signedTx = "0x..."; // Replace with a signed transaction
const txHash = await eth.sendTransaction(signedTx);
console.log(`Transaction Hash: ${txHash}`);
```

---

## **Supported Chains**

| Chain      | Type  | RPC Example                                |
|------------|-------|-------------------------------------------|
| Ethereum   | EVM   | `https://mainnet.infura.io/v3/YOUR_KEY`   |
| Polygon    | EVM   | `https://polygon-rpc.com`                 |
| Avalanche  | EVM   | `https://api.avax.network/ext/bc/C/rpc`   |
| Solana     | Non-EVM | `https://api.mainnet-beta.solana.com`     |
| Cosmos     | Non-EVM | `https://rpc.cosmos.network`             |

---

## **API Documentation**

### **`MultiChain` Class**

#### **Constructor**
```javascript
new MultiChain(chainType, rpcUrl)
```
- `chainType`: The type of blockchain (e.g., `"ethereum"`, `"polygon"`, `"solana"`).
- `rpcUrl`: The RPC endpoint for the blockchain.

#### **Methods**

##### **`getBalance(address)`**
- Fetches the balance of an address.
- **Parameters**:
    - `address`: The address to query.
- **Returns**: A `string` (for EVM chains) or `number` (for non-EVM chains).

##### **`sendTransaction(tx)`**
- Sends a signed transaction.
- **Parameters**:
    - `tx`: The signed transaction (as a `string` for EVM chains or a `Transaction` object for Solana).
- **Returns**: The transaction hash as a `string`.

---

## **Examples**

### **Ethereum**
```javascript
import { MultiChain } from "@aliezzahn/multi-chain-abstraction";

const eth = new MultiChain("ethereum", "https://mainnet.infura.io/v3/YOUR_INFURA_KEY");

// Get balance
const balance = await eth.getBalance("0x0000000000000000000000000000000000000000");
console.log(`Ethereum Balance: ${balance}`);

// Send transaction
const signedTx = "0x..."; // Replace with a signed transaction
const txHash = await eth.sendTransaction(signedTx);
console.log(`Transaction Hash: ${txHash}`);
```

### **Solana**
```javascript
import { MultiChain } from "@aliezzahn/multi-chain-abstraction";

const solana = new MultiChain("solana", "https://api.mainnet-beta.solana.com");

// Get balance
const balance = await solana.getBalance("11111111111111111111111111111111");
console.log(`Solana Balance: ${balance}`);

// Send transaction
const tx = new Transaction(); // Replace with a signed transaction
const txHash = await solana.sendTransaction(tx);
console.log(`Transaction Hash: ${txHash}`);
```

---

## **Extending the Library**

You can add support for new chains by extending the `EVMBase` or creating a new class for non-EVM chains.

### **Example: Adding Binance Smart Chain (EVM)**
```javascript
import { EVMBase } from "@aliezzahn/multi-chain-abstraction";

export class BinanceSmartChain extends EVMBase {
  getChainId() {
    return 56; // BSC mainnet chain ID
  }
}
```

### **Example: Adding Terra (Non-EVM)**
```javascript
import { LCDClient } from "@terra-money/terra.js";

export class Terra {
  constructor(rpcUrl) {
    this.client = new LCDClient({ URL: rpcUrl, chainID: "columbus-5" });
  }

  async getBalance(address) {
    const [balance] = await this.client.bank.balance(address);
    return balance.get("uluna").amount.toString();
  }

  async sendTransaction(tx) {
    throw new Error("Terra sendTransaction not implemented yet");
  }
}
```

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Support**

For issues or feature requests, please open an issue on the [GitHub repository](https://github.com/your-repo/multi-chain-abstraction).

---

## Author

- **aliezzahn**  
  GitHub: [@aliezzahn](https://github.com/aliezzahn)  
  Email: [aliezzahn@gmail.com](aliezzahn@gmail.com)

---