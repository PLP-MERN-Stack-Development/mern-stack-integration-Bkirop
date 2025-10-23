const { body } = require('express-validator');

exports.createPostValidator = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  
  body('content')
    .trim()
    .notEmpty().withMessage('Content is required'),
  
  body('category')
    .notEmpty().withMessage('Category is required')
    .isMongoId().withMessage('Invalid category ID'),
  
  body('excerpt')
    .optional()
    .isLength({ max: 500 }).withMessage('Excerpt cannot exceed 500 characters'),
  
  body('status')
    .optional()
    .isIn(['draft', 'published']).withMessage('Status must be draft or published')
];

exports.updatePostValidator = [
  body('title')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  
  body('content')
    .optional()
    .trim(),
  
  body('category')
    .optional()
    .isMongoId().withMessage('Invalid category ID'),
  
  body('excerpt')
    .optional()
    .isLength({ max: 500 }).withMessage('Excerpt cannot exceed 500 characters'),
  
  body('status')
    .optional()
    .isIn(['draft', 'published']).withMessage('Status must be draft or published')
];