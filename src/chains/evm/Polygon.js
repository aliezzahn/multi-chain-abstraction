import { EVMBase } from "./EVMBase.js";

export class Polygon extends EVMBase {
  getChainId() {
    return 137; // Polygon mainnet chain ID
  }
}