export const config = {
  networks: {
    Mainnet: {
      PRIMARY_VALIDATOR: {
        nickname: 'PV',
        protocol: "http",
        address: "54.219.234.129",
        node_identifier: "ae1ed54e05d5416397140131965d924c4e323ffd9833dbf68399f740591e1e90",
      },
      KEYSIGN_BANK: {
        nickname: 'Keysign',
        protocol: "https",
        address: "bank.keysign.app",
        node_identifier: "8534f05f7eac8cb0cbf4d591c51484fc20c6ee9c522b5213e4572e68d97991be",
      },
      PRIMARY_BANK: {
        nickname: 'Main Bank',
        protocol: "http",
        address: "54.183.16.194",
        node_identifier: "88d57e07642fa7e4ee23906aa1bc0db779ee0d4fa442361fd27ec663d4b69ace",
      }
    },
    Testnet: {
      PRIMARY_BANK: {
        nickname: 'Testnet Bank',
        protocol: "http",
        address: "20.98.98.0",
        node_identifier: "51d9ee99d9b4e46f90d5cd67b0720b299adc7c2d543d1d92285dbe2ad7003573",
      },
      PRIMARY_VALIDATOR: {
        nickname: 'Testnet PV',
        protocol: "http",
        address: "20.98.87.223",
        node_identifier: "806e82560cc34e104016561a8e5022c00a7300f79c5f0aa48cbf30a05213b5d7",
      }
    }
  }
}