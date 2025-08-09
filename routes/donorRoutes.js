const express = require('express');
const router = express.Router();
const { createDonor, getAllDonors } = require('../controllers/donorController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createDonor);
router.get('/', getAllDonors);

module.exports = router;
