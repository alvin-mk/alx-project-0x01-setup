import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: prevUsers.length + 1 },
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Directory</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserData[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
