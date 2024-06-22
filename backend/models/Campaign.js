const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  campaignId: { type: String, required: true },
  adClicks: { type: Number, default: 0 },
  aggregatedZkProof: { type: String, required: true },
  ads: [{ type: String }],
});

module.exports = mongoose.model("Campaign", CampaignSchema);
