import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logoutIcon from "../assets/logout.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "../assets/logo.png";

import homeIcon from "../assets/home.png";
import talentIcon from "../assets/talent.png";
import networkIcon from "../assets/network.png";
import castingIcon from "../assets/casting.png";
import chatIcon from "../assets/chat.png";
import createIcon from "../assets/content.png";

import profileIcon from "../assets/profile.png";
import transactionIcon from "../assets/transaction.png";
import supportIcon from "../assets/support.png";
import aboutIcon from "../assets/about.png";
import termsIcon from "../assets/terms.png";
import privacyIcon from "../assets/privacyy.png";

const Sidebar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track active item
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", icon: homeIcon, path: "Feed" },
    { name: "Talent", icon: talentIcon, path: "Talent" },
    { name: "Network", icon: networkIcon, path: "Network" },
    { name: "Casting", icon: castingIcon, path: "Casting" },
    { name: "Chat", icon: chatIcon, path: "Chat" },
    { name: "Create Content", icon: createIcon, path: "CreateContent" },
  ];

  const accountItems = [
    { name: "Profile", icon: profileIcon, path: "Profile" },
    { name: "Transaction History", icon: transactionIcon, path: "Transactionhistory" },
    { name: "Support", icon: supportIcon, path: "Support" },
    { name: "About us", icon: aboutIcon, path: "About" },
    { name: "Terms & Conditions", icon: termsIcon, path: "Terms" },
    { name: "Privacy Policy", icon: privacyIcon, path: "Privacy" },
  ];
  

  const handleNavigate = (path, name) => {
    setActiveItem(name); // Set the active item
    onNavigate(path); // Call the navigation function
  };

  return (
<aside className="w-60 h-screen bg-white p-4 flex flex-col">
{/* Logo */}
      <div className="mb-6">
        <img
          src={logoImage}
          alt="YOUTOO ART Logo"
          className="h-[40px] object-contain"
        />
      </div>

      {/* Navigation links */}
      <nav
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        className="space-y-1 mb-3 -mt-3"
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigate(item.path, item.name)}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
              activeItem === item.name
                ? "text-blue-500 bg-blue-100"
                : "text-black hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className={`w-5 h-5 object-contain ${
                activeItem === item.name ? "filter-blue" : ""
              }`}
              style={{
                filter:
                  activeItem === item.name
                    ? "invert(29%) sepia(98%) saturate(748%) hue-rotate(190deg) brightness(92%) contrast(92%)"
                    : "none",
              }}
            />
            <span className="text-sm">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Account dropdown */}
      <div
        className="flex items-center justify-between cursor-pointer mb-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 ml-2">Account</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <div
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          className="-mt-16 space-y-2 text-sm ml-2"
        >
          {accountItems.map((item) => (
  <div
    key={item.name}
    className="flex items-center hover:text-gray-600 cursor-pointer py-1"
    onClick={() => handleNavigate(item.path, item.name)}
  >
    <img
      src={item.icon}
      alt={`${item.name} icon`}
      className="w-5 h-5 mr-3 object-contain"
      style={{
        filter:
          activeItem === item.name
            ? "invert(29%) sepia(98%) saturate(748%) hue-rotate(190deg) brightness(92%) contrast(92%)"
            : "none",
      }}
    />
    <span>{item.name}</span>
  </div>
))}

        </div>
      )}

     {/* Logout button */}
<div className={`mt-auto lg:mb-0 mb-8`}>
  <button
    onClick={() => navigate("/login")}
    className="flex items-center ml-1 w-full py-2 bg-orange-50 text-[#FF4E4E] hover:bg-orange-100 transition"
  >
    <img src={logoutIcon} alt="Logout" className="h-6 w-6 mr-3" />
    Logout
  </button>
</div>
    </aside>
  );
};

export default Sidebar;