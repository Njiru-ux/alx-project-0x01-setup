import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Post Content</h1>
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full text-white font-medium transition duration-300">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            posts?.map((post: PostProps, index: number) => (
              <PostCard 
                key={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
                id={post.id}
              />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Posts;