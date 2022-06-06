import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1ae33b5699eE41308f3f717be400f7cf9e74a9a3"
);

export default instance;
