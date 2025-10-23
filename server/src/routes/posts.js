// server/src/routes/posts.js
const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const { createPostValidator, updatePostValidator } = require('../validators/PostValidator');

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', protect, createPostValidator, createPost);
router.put('/:id', protect, updatePostValidator, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;