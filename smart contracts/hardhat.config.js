require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/QSFN-yvXWsaxn5Bo4psXnsMuvgRanRmS',
      accounts: ['f97464c4f7bf0f231630eda4aa9d7b70eb72dcde97b2c3fe31e9da586ed8f24b'],
    },
  },
};