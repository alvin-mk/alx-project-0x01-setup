import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserData, PostProps } from "@/interfaces";
import { useState } from "react";


const Users: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostProps) => {
    setUserPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 },
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Posts</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userPosts.map(({ id, title, body, userId }) => (
            <UserCard
              key={id}
              id={id}
              title={title}
              body={body}
              userId={userId}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}
////
posts.map
////
export default Users;
