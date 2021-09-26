export const config = {
  network: {
    Mainnet: {
      PRIMARY_BANK: {
        protocol: "http",
        address: "",
      },
      KEYSIGN_BANK: {
        protocol: "https",
        address: "bank.keysign.app"
      },
    },
    Testnet: {
      PRIMARY_BANK: {
        protocol: "http",
        ip_address: "20.98.98.0"
      }
    }
  }
}