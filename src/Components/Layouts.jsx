import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;