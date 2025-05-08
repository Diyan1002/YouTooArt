import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Notifications from "../components/Notifications";
import Talent from "../components/Talent";
import Network from "../components/Network";
import Casting from "../components/Casting";
import Applied from "../components/Applied";
import Profile from "../components/Profile";
import Transactionhistory from "../components/Transactionhistory";
import Support from "../components/Support";
import About from "../components/About";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import Chat from "../components/Chat";
import MobileHeader from "../components/MobileHeader";

const HomePage = () => {
  const [activePage, setActivePage] = useState("Feed");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavigation = (page) => {
    setActivePage(page);
    setShowSidebar(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Full-screen sidebar on mobile */}
      {showSidebar && (
  <div className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden" onClick={() => setShowSidebar(false)} />
)}

<div className={`md:block ${showSidebar ? "fixed top-0 left-0 z-50" : "hidden"} md:relative`}>
  <Sidebar onNavigate={handleNavigation} />
</div>


      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <MobileHeader
          onMenuClick={() => setShowSidebar(!showSidebar)}
          showSidebar={showSidebar}
          showNotifications={showNotifications}
          onCloseNotifications={(show) => setShowNotifications(show)}
        />

        {/* Page content */}
        <div className="flex-1 overflow-hidden flex">
          <div className="flex-1 overflow-y-auto">
            {activePage === "Talent" && <Talent />}
            {activePage === "Network" && <Network />}
            {activePage === "Casting" && <Casting />}
            {activePage === "Chat" && <Chat />}
            {activePage === "Applied" && <Applied />}
            {activePage === "Profile" && <Profile />}
            {activePage === "Transactionhistory" && <Transactionhistory />}
            {activePage === "Support" && <Support />}
            {activePage === "About" && <About />}
            {activePage === "Terms" && <Terms />}
            {activePage === "Privacy" && <Privacy />}
            {activePage === "Feed" && <Feed />}
          </div>

          {/* Notifications - hidden on mobile */}
          <div className="hidden md:block">
            {activePage !== "Network" && 
             activePage !== "Casting" && 
             activePage !== "Chat" && 
             <Notifications />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;