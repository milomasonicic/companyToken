const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const tokenPrice = 1;

const sharetoken = buildModule("ShareToken", (m) => {

  const initialSupply = 10;
  const sharetoken = m.contract("ShareToken", [initialSupply, tokenPrice]);

  return { sharetoken };

})

module.exports = sharetoken
