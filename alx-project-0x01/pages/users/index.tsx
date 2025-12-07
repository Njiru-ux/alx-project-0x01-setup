import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (userData: UserData) => {
    // Generate a new ID (last user ID + 1 or 1 if no users)
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const userToAdd = { ...userData, id: newId };
    setNewUser(userToAdd);
    console.log("New user added:", userToAdd);
    
    // In a real app, you would update the state or send to API
    // For now, we'll just log it and update local state for demonstration
    alert(`User "${userData.name}" added successfully! (Check console for details)`);
  };

  // Combine existing users with new user if exists
  const allUsers = newUser ? [newUser as UserProps, ...users] : users;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full text-white font-medium transition duration-300"
          >
            Add User
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600">
            This page displays users from JSONPlaceholder API. Each user card shows their contact information and details.
            {newUser && (
              <span className="ml-2 text-green-600 font-medium">
                ✓ New user "{newUser.name}" added!
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUsers.map((user: UserProps) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Showing {allUsers.length} users.
            {newUser && " (1 new user added locally)"}
          </p>
        </div>
      </main>

      {isModalOpen && (
        <UserModal 
          onClose={() => setModalOpen(false)} 
          onSubmit={handleAddUser} 
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}

export default Users;