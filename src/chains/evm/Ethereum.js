import { EVMBase } from "./EVMBase.js";

export class Ethereum extends EVMBase {
  getChainId() {
    return 1; // Ethereum mainnet chain ID
  }
}