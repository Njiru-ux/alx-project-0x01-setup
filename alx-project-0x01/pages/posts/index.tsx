import React from 'react';
import PostCard from '../../components/common/PostCard';
import Button from '../../components/common/Button';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the content of the first post. It demonstrates how posts will be displayed in the application.',
    userId: 1
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'Another example post showing the structure and formatting of content in the posts page.',
    userId: 2
  },
  {
    id: 3,
    title: 'Third Post',
    body: 'Additional post content to fill out the page and demonstrate the layout of multiple posts.',
    userId: 3
  }
];

const PostsPage: React.FC = () => {
  const handleAddPost = () => {
    alert('Add Post functionality will be implemented with a modal');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Posts</h1>
        <Button onClick={handleAddPost} variant="primary">
          Add New Post
        </Button>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-600">
          This page displays posts fetched from JSONPlaceholder API. Each post shows the title, content, and author information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500">
          Showing {mockPosts.length} posts. In the full implementation, posts will be fetched from the API.
        </p>
      </div>
    </div>
  );
};

export default PostsPage;