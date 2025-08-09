const Request = require('../models/Request');

exports.createRequest = async (req, res, next) => {
  try {
    const request = await Request.create({ ...req.body, requester: req.user.id });
    res.status(201).json(request);
  } catch (err) {
    next(err);
  }
};

exports.getRequests = async (req, res, next) => {
  try {
    const requests = await Request.find().populate('requester', 'name email');
    res.json(requests);
  } catch (err) {
    next(err);
  }
};
