import { Connection, PublicKey, Transaction } from "@solana/web3.js";

export class Solana {
  constructor(rpcUrl) {
    this.connection = new Connection(rpcUrl);
  }

  async getBalance(address) {
    const publicKey = new PublicKey(address);
    const balance = await this.connection.getBalance(publicKey);
    return balance;
  }

  async sendTransaction(tx) {
    const txHash = await this.connection.sendTransaction(tx);
    return txHash;
  }
}