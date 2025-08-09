const express = require('express');
const router = express.Router();
const { createRequest, getRequests } = require('../controllers/requestController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createRequest);
router.get('/', getRequests);

module.exports = router;
