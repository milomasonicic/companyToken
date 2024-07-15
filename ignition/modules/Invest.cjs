

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Invest = buildModule("Invest", (m) => {

  const invest  = m.contract("Invest");

  return { invest };

})

module.exports = Invest


