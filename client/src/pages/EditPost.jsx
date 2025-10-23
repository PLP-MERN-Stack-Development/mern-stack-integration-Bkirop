// client/src/pages/EditPost.jsx
import { PostForm } from '../components/posts/PostForm';

export const EditPost = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <PostForm isEdit={true} />
    </div>
  );
};