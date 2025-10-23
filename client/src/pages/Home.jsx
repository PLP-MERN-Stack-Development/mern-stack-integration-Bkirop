// client/src/pages/Home.jsx
import { PostList } from '../components/posts/PostList';

export const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to BlogApp</h1>
          <p className="text-xl text-blue-100 mb-8">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </div>
      <PostList />
    </div>
  );
};
