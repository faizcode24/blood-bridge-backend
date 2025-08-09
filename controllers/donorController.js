const Donor = require('../models/Donor');

exports.createDonor = async (req, res, next) => {
  try {
    const donor = await Donor.create({ ...req.body, user: req.user.id });
    res.status(201).json(donor);
  } catch (err) {
    next(err);
  }
};

exports.getAllDonors = async (req, res, next) => {
  try {
    const donors = await Donor.find().populate('user', 'name email');
    res.json(donors);
  } catch (err) {
    next(err);
  }
};
