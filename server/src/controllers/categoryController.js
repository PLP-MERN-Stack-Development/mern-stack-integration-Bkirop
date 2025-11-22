// server/src/controllers/categoryController.js

const Category = require('../models/Category');

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    console.log('Getting categories...');
    const categories = await Category.find().sort({ name: 1 });
    console.log('Categories found:', categories.length, categories.map(c => ({ name: c.name, _id: c._id })));
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error getting categories:', error);
    next(error);
  }
};
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

// @route   POST /api/categories/seed
// @desc    Seed categories
// @access  Public (Temporary)
exports.seedCategories = async (req, res, next) => {
  try {
    const categories = [
      { name: 'Technology', description: 'Latest trends and innovations in technology' },
      { name: 'Lifestyle', description: 'Tips and stories about daily life and wellness' },
      { name: 'Travel', description: 'Destinations, adventures, and travel experiences' }
    ];

    const createdCategories = [];
    for (const categoryData of categories) {
      try {
        // First check if category exists
        const existingCategory = await Category.findOne({ name: categoryData.name });
        if (existingCategory) {
          console.log(`Category ${categoryData.name} already exists`);
          createdCategories.push(existingCategory);
          continue;
        }

        // Create new category with slug generation
        const category = new Category(categoryData);
        await category.save();
        createdCategories.push(category);
        console.log(`Created category: ${category.name}`);
      } catch (err) {
        console.log(`Error processing category ${categoryData.name}:`, err.message);
      }
    }

    res.status(201).json({
      success: true,
      data: createdCategories,
      message: `${createdCategories.length} categories processed successfully`
    });
  } catch (error) {
    next(error);
  }
};
