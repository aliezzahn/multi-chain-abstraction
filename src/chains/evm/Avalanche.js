import { EVMBase } from "./EVMBase.js";

export class Avalanche extends EVMBase {
  getChainId() {
    return 43114; // Avalanche mainnet chain ID
  }
}