import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postsAPI, categoriesAPI } from '../../services/api';
import { ErrorMessage } from '../common/ErrorMessage';

export const PostForm = ({ isEdit = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    status: 'draft'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
    if (isEdit && id) {
      fetchPost();
    }
  }, [isEdit, id]);

  const fetchCategories = async () => {
    try {
      const response = await categoriesAPI.getAll();
      setCategories(response.data.data);
    } catch (err) {
      console.error('Failed to fetch categories');
    }
  };

  const fetchPost = async () => {
    try {
      const response = await postsAPI.getOne(id);
      const post = response.data.data;
      setFormData({
        title: post.title,
        content: post.content,
        excerpt: post.excerpt || '',
        category: post.category || '',
        tags: post.tags || '',
        status: post.status || 'draft'
      });
    } catch (err) {
      console.error('Failed to fetch post', err);
    }
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setLoading(true);
   setError('');

   try {
     if (isEdit) {
       await postsAPI.update(id, formData);
       navigate(`/posts/${id}`);
     } else {
       const response = await postsAPI.create(formData);
       navigate(`/posts/${response.data.data._id}`);
     }
   } catch (err) {
     setError(err.response?.data?.message || 'Failed to save post');
   } finally {
     setLoading(false);
   }
 };

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };

 return (
   <div className="max-w-2xl mx-auto p-6">
     <h1 className="text-3xl font-bold mb-6">
       {isEdit ? 'Edit Post' : 'Create New Post'}
     </h1>

     <form onSubmit={handleSubmit} className="space-y-6">
       <div>
         <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
           Title
         </label>
         <input
           type="text"
           id="title"
           name="title"
           value={formData.title}
           onChange={handleChange}
           required
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       <div>
         <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
           Content
         </label>
         <textarea
           id="content"
           name="content"
           value={formData.content}
           onChange={handleChange}
           required
           rows={10}
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       <div>
         <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
           Excerpt
         </label>
         <textarea
           id="excerpt"
           name="excerpt"
           value={formData.excerpt}
           onChange={handleChange}
           rows={3}
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       <div>
         <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
           Category
         </label>
         <select
           id="category"
           name="category"
           value={formData.category}
           onChange={handleChange}
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
           <option value="">Select a category</option>
           {categories.map(category => (
             <option key={category._id} value={category._id}>
               {category.name}
             </option>
           ))}
         </select>
       </div>

       <div>
         <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
           Tags (comma separated)
         </label>
         <input
           type="text"
           id="tags"
           name="tags"
           value={formData.tags}
           onChange={handleChange}
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       <div>
         <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
           Status
         </label>
         <select
           id="status"
           name="status"
           value={formData.status}
           onChange={handleChange}
           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
           <option value="draft">Draft</option>
           <option value="published">Published</option>
         </select>
       </div>

       {error && <ErrorMessage message={error} />}

       <div className="flex gap-4">
         <button
           type="submit"
           disabled={loading}
           className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
         >
           {loading ? 'Saving...' : (isEdit ? 'Update Post' : 'Create Post')}
         </button>
         <button
           type="button"
           onClick={() => navigate('/')}
           className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
         >
           Cancel
         </button>
       </div>
     </form>
   </div>
 );
};