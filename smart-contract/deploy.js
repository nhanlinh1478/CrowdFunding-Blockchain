const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

require("dotenv").config();

const provider = new HDWalletProvider({
  mnemonic: {
    phrase:
      "spot design cram organ shoe middle hole quality doll person success exit",
  },
  providerOrUrl:
    "https://rinkeby.infura.io/v3/8d8d169db56b4fc7b03de89a8081cf5e",
});
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attemping to deploy to accounts ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log("Contract deploy to ", result.options.address);
};

deploy();
