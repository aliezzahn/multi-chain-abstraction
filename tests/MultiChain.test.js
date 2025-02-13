import { describe, it, expect } from "bun:test";
import { MultiChain } from "../src/index.js";

describe("MultiChain", () => {
  it("should get Ethereum balance", async () => {
    const eth = new MultiChain("ethereum", "https://mainnet.infura.io/v3/YOUR_INFURA_KEY");
    const balance = await eth.getBalance("0x0000000000000000000000000000000000000000");
    expect(typeof balance).toBe("string");
  });

  it("should get Polygon balance", async () => {
    const polygon = new MultiChain("polygon", "https://polygon-rpc.com");
    const balance = await polygon.getBalance("0x0000000000000000000000000000000000000000");
    expect(typeof balance).toBe("string");
  });

  it("should get Solana balance", async () => {
    const solana = new MultiChain("solana", "https://api.mainnet-beta.solana.com");
    const balance = await solana.getBalance("11111111111111111111111111111111");
    expect(typeof balance).toBe("number");
  });

  it("should throw error for unsupported chain", () => {
    expect(() => new MultiChain("unsupported", "https://example.com")).toThrow("Unsupported chain");
  });
});