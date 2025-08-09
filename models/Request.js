const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bloodGroupNeeded: String,
  location: String,
  hospital: String,
  contactNumber: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);
