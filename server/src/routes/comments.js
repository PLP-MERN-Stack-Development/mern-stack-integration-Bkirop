const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// Placeholder routes for comments
router.get('/', (req, res) => {
  res.json({ message: 'Get all comments' });
});

router.post('/', protect, (req, res) => {
  res.json({ message: 'Create comment' });
});

router.put('/:id', protect, (req, res) => {
  res.json({ message: 'Update comment' });
});

router.delete('/:id', protect, (req, res) => {
  res.json({ message: 'Delete comment' });
});

module.exports = router;