const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bloodGroup: String,
  location: String,
  contact: String,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Donor', donorSchema);
