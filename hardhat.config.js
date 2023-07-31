require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const API_URL = "https://goerli.infura.io/v3/8e9f38bdefd240ffa298ed37a39376af";
const PRIVATE_KEY =
  "a264cdbcf5cffa1c6e4e34f3f63c899a05a88ff00a0d2db4d2299ad380c125b0";
const PUBLIC_KEY = "Your Account Address";

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
