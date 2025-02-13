import { StargateClient } from "@cosmjs/stargate";

export class Cosmos {
  constructor(rpcUrl) {
    this.rpcUrl = rpcUrl;
  }

  async getBalance(address) {
    const client = await StargateClient.connect(this.rpcUrl);
    const balance = await client.getBalance(address, "uatom");
    return balance.amount;
  }

  async sendTransaction(tx) {
    throw new Error("Cosmos sendTransaction not implemented yet");
  }
}