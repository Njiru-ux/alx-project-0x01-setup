import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ALX Project
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/posts" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Posts
            </Link>
            <Link 
              href="/users" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;