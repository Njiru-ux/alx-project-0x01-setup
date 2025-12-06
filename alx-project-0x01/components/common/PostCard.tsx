import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
  userId: number;
  id?: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, userId }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{body}</p>
      <div className="text-sm text-gray-500">
        Posted by User #{userId}
      </div>
    </div>
  );
};

export default PostCard;