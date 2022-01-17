require("@nomiclabs/hardhat-waffle")
const projectId = 'fc650a7190d44407974d04e3c10c33f1'
const fs = require('fs')
const privateKey = fs.readFileSync("./p-key.txt", {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  mumbai: {
    url: `hhttps://polygon-mumbai.infura.io/v3/${projectId}`,
    accounts: [privateKey]
  },
  mainenet: {
    url: `https://mainnet.infura.io/v3/${projectId}`,
    accounts: [privateKey]
  },
  rinkeby: {
    url: `https://rinkeby.infura.io/v3/${projectId}`,
    accounts: [privateKey]
  }
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}