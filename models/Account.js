const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rank: { type: String, required: true },
  skins: { type: Number, default: 0 },
  price: { type: Number, required: true },
  hours: { type: String, default: "1小时起租" },
  description: { type: String, default: "" },
  status: { type: String, default: "available" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', accountSchema);
