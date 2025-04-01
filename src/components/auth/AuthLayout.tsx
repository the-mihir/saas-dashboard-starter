
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">SaaS Kit</span>
          </Link>
        </div>
        {children}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© 2023 SaaS Starter Kit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
