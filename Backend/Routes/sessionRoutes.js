const express = require('express');
const router = express.Router();
const Session = require("../Models/Sessions");
const authMiddleware = require('../AuthMiddleware');


router.use(authMiddleware)

router.get('/', async (req, res) => {
  console.log(req.user._id, "id")

  try {
    
    const sessions = await Session.find({ userId: req.user._id }).populate('userId', 'name email');
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;