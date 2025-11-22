const mongoose = require('mongoose');
require('dotenv').config();

const Category = require('./server/src/models/Category');

const categories = [
  { name: 'Technology', description: 'Latest trends and innovations in technology' },
  { name: 'Lifestyle', description: 'Tips and stories about daily life and wellness' },
  { name: 'Travel', description: 'Destinations, adventures, and travel experiences' }
];

async function seedCategories() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    for (const categoryData of categories) {
      const category = new Category(categoryData);
      await category.save();
      console.log(`Created category: ${category.name}`);
    }

    console.log('All categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedCategories();