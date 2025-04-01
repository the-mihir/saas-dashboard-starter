
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
        <div className="mb-8 flex flex-col items-center gap-2">
        
          <img src="https://placehold.co/400" alt="logo" className="w-20 h-20 rounded-full border border-slate-200" />
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-600">Dev_Kit</span>
          </Link>
        </div>
        {children}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© 2025 Starter Kit developed by 💖 <span> <a target="_blank" href="https://github.com/the-mihir/">Mihir</a></span>.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
