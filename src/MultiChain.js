import { Ethereum } from "./chains/evm/Ethereum.js";
import { Polygon } from "./chains/evm/Polygon.js";
import { Avalanche } from "./chains/evm/Avalanche.js";
import { Solana } from "./chains/non-evm/Solana.js";
import { Cosmos } from "./chains/non-evm/Cosmos.js";

export class MultiChain {
  constructor(chainType, rpcUrl) {
    switch (chainType.toLowerCase()) {
      case "ethereum":
        this.chain = new Ethereum(rpcUrl);
        break;
      case "polygon":
        this.chain = new Polygon(rpcUrl);
        break;
      case "avalanche":
        this.chain = new Avalanche(rpcUrl);
        break;
      case "solana":
        this.chain = new Solana(rpcUrl);
        break;
      case "cosmos":
        this.chain = new Cosmos(rpcUrl);
        break;
      default:
        throw new Error("Unsupported chain");
    }
  }

  async getBalance(address) {
    return this.chain.getBalance(address);
  }

  async sendTransaction(tx) {
    return this.chain.sendTransaction(tx);
  }
}