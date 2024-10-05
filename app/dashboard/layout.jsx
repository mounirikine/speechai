import React from 'react';
import Header from './_components/Header';
import SideNav from './_components/SideNav';

const DashboardLayouts = ({ children }) => {
  return (
    // <div className="dashboard-layout">
    //   <header className="fixed-header">
    //     <Header />
    //   </header>
    //   <aside className="fixed-sidebar hidden lg:flex">
    //     <SideNav />
    //   </aside>
    //   <main className="main-content w-full">
    //     {children}
    //   </main>
    // </div>

    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="hidden  w-64 bg-gray-800 text-gray-200 lg:flex flex-col">
        
        <SideNav />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="">
        <Header />
          
        </header>

        {/* Content Area */}
        <main className="flex-1 lg:p-6  overflow-y-auto">
        {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayouts;
