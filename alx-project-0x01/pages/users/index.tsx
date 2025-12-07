import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full text-white font-medium transition duration-300">
            Add User
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600">
            This page displays users from JSONPlaceholder API. Each user card shows their contact information and details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((user: UserProps) => (
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
            Showing {users?.length || 0} users from JSONPlaceholder API.
          </p>
        </div>
      </main>
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