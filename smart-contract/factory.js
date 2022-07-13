import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4351730129f11EedF9b1c6A3d9b58474D5960A1F"
);

export default instance;
