// server/src/controllers/categoryController.js

const Category = require('../models/Category');

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    next(error);
  }
};

// @route   POST /api/categories
// @desc    Create category
// @access  Private (Admin)
exports.createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    next(error);
  }
};
