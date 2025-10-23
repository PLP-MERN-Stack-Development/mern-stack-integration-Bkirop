// client/src/components/posts/PostCard.jsx
import { Link } from 'react-router-dom';

export const PostCard = ({ post }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {post.category?.name}
          </span>
          <span className="text-gray-500 text-sm">{formatDate(post.createdAt)}</span>
        </div>
        
        <Link to={`/posts/${post._id}`}>
          <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 mb-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {post.author?.username}</span>
          <span>{post.views} views</span>
        </div>
      </div>
    </div>
  );
};