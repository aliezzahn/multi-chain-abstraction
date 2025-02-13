import { ethers } from "ethers";

export class EVMBase {
  constructor(rpcUrl) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl); // Updated for ethers v6
  }

  async getBalance(address) {
    const balance = await this.provider.getBalance(address);
    return ethers.formatEther(balance); // Updated for ethers v6
  }

  async sendTransaction(signedTx) {
    const txResponse = await this.provider.broadcastTransaction(signedTx); // Updated for ethers v6
    return txResponse.hash;
  }

  getChainId() {
    throw new Error("getChainId() must be implemented by the child class");
  }
}