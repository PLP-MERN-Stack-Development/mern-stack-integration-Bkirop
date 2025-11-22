// server/src/routes/categories.js
const express = require('express');
const router = express.Router();
const { getCategories, createCategory, seedCategories } = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getCategories);
router.post('/', protect, authorize('admin'), createCategory);
router.post('/seed', seedCategories); // Temporary route for seeding

module.exports = router;