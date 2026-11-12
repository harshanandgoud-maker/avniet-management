import React from 'react';
import BrandVisualSide from './BrandVisualSide';
import LoginForm from './LoginForm';

export const AuthGateway = () => {
  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F172A] selection:bg-amber-400 selection:text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Visual / Brand Identity Column (Left Side) */}
      <BrandVisualSide />

      {/* Interactive Authentication Form Column (Right Side) */}
      <LoginForm />
    </main>
  );
};

export default AuthGateway;

