import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8d35874292FE8b3E8745B080eF7C2A0253dDa493"
);

export default instance;
