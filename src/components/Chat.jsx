import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import searchImg from "../assets/search.png";
// import hbImg from "../assets/Elli.PNG";
import Editt from "../assets/edit.png";
import { FaEllipsisV, FaArrowLeft } from "react-icons/fa";

// Import images for each message
import ranveerImg from "../assets/ranveer.png";
import aliImg from "../assets/Ali.png";
import emersonImg from "../assets/emerson.png";
import nolanImg from "../assets/nolan.png";
import witsonImg from "../assets/witson.png";
import jaylonImg from "../assets/jaylon.png";

const messages = [
  {
    name: "Ranveer Singh",
    text: "Good Job Wajahat! I'm proud of you.",
    time: "1 hour ago",
    active: false,
    img: ranveerImg,
  },
  {
    name: "Muhammad Ali Nizami",
    text: "Hi Wajahat! Hope you're doing well...",
    time: "4 hours ago",
    active: true,
    img: aliImg,
  },
  {
    name: "Emerson Dias",
    text: "Hi Wajahat! Hope you're doing well...",
    time: "Yesterday, 12:49 pm",
    active: false,
    img: emersonImg,
  },
  {
    name: "Nolan George",
    text: "Hi Wajahat! Hope you're doing well...",
    time: "Yesterday, 12:49 pm",
    active: false,
    img: nolanImg,
  },
  {
    name: "Witson Margo",
    text: "Hi Wajahat! Hope you're doing well...",
    time: "Yesterday, 12:49 pm",
    active: false,
    img: witsonImg,
  },
  {
    name: "Jaylon Rhiel Madsen",
    text: "Hi Wajahat! Hope you're doing well...",
    time: "Yesterday, 12:49 pm",
    active: false,
    img: jaylonImg,
  },
];

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(1); // Default to Muhammad Ali
  const [isMobile, setIsMobile] = useState(false);
  const [showChatList, setShowChatList] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowChatList(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChatSelect = (index) => {
    setSelectedChat(index);
    if (isMobile) {
      setShowChatList(false);
    }
  };

  const handleBackToChatList = () => {
    setShowChatList(true);
  };

  const renderChatList = () => (
    <div className={`${isMobile ? 'w-full' : 'w-full md:w-1/3'} border-r overflow-y-auto`}>
      {messages
        .filter((msg) =>
          msg.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 md:px-4 md:py-3 cursor-pointer ${
              selectedChat === index ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleChatSelect(index)}
          >
            <img
              src={msg.img}
              alt={msg.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 border-b pb-3">
              <div className="flex flex-col">
                <p className="font-semibold text-sm">{msg.name}</p>
                <p className="text-xs text-gray-600 truncate">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  const renderChatArea = () => {
    const msg = messages[selectedChat];
    
    return (
      <div className={`${isMobile ? 'w-full' : 'flex-1'} flex flex-col bg-gray-50 h-full`}>
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-3 md:p-4 border-b bg-white shadow-sm">
          {isMobile && (
            <button 
              onClick={handleBackToChatList}
              className="mr-1 md:mr-2 text-gray-600"
            >
              <FaArrowLeft className="text-lg" />
            </button>
          )}
          <img src={msg.img} alt="profile" className="w-10 h-10 rounded-full" />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">{msg.name}</div>
            <div className="text-sm text-gray-400 truncate">
              Last online, 2 mins ago
            </div>
          </div>
          <div className="border border-gray-200 p-2 rounded-2xl">
            <FaEllipsisV className="text-gray-600 cursor-pointer text-sm md:text-base" />
          </div>
        </div>

        {/* Scrollable Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
          <div className="bg-gray-200 text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
            Hi Wajahat! Hope you're doing well.
          </div>

          <div className="flex flex-col items-end space-y-2 text-right">
            <div className="bg-blue-500 text-white text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
              Hi {msg.name.split(' ')[0]}! I'm fine.
            </div>
            <div className="bg-blue-500 text-white text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
              What about you?
            </div>
            <div className="bg-blue-500 text-white text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
              Have you posted a Casting Call for your next project?
            </div>
          </div>

          <div className="bg-gray-200 text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
            I'm good.
          </div>
          <div className="bg-gray-200 text-sm px-3 py-2 rounded-xl max-w-[80%] md:max-w-[60%]">
            Yes exactly, that's what I wanted to discuss with you.
          </div>
        </div>

        {/* Fixed Message Input at Bottom */}
        <div className="sticky bottom-0 bg-white border-t p-3 md:p-4">
          <div className="flex items-center gap-2 md:gap-3">
            <input
              type="text"
              placeholder="Enter your message"
              className="flex-1 p-3 border rounded-full focus:outline-none focus:ring text-sm"
            />
            <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-lg">➤</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Section: Messages and Search */}
      <div className="flex items-center justify-between p-3 border-b shadow-sm bg-white">
        {/* Messages Text */}
        <div className="text-lg md:text-xl font-medium">Chat</div>

        {/* Search Bar and Edit Profile Button */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-8 text-xs md:text-sm border rounded-full bg-gray-100 focus:bg-white focus:outline-none w-32 md:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src={searchImg}
              alt="Search"
              className="absolute left-2 top-2.5 w-3 h-3 md:w-4 md:h-4 opacity-50"
            />
          </div>
          <button className="bg-black text-white text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 md:gap-2">
            <img src={Editt} alt="Edit" className="w-2.5 h-2.5 md:w-3 md:h-3" />
            <span className="hidden sm:inline">Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content: Left (Chat List) and Right (Chat Area) */}
      <div className="flex flex-1 overflow-hidden relative">
        {!isMobile ? (
          <>
            {renderChatList()}
            {renderChatArea()}
          </>
        ) : (
          showChatList ? renderChatList() : renderChatArea()
        )}
      </div>

      {/* Mobile bottom navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-10">
          <button 
            className={`flex flex-col items-center p-2 ${showChatList ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowChatList(true)}
          >
            <span className="text-xs">Chats</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 ${!showChatList ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => selectedChat !== null && setShowChatList(false)}
            disabled={selectedChat === null}
          >
            <span className="text-xs">Messages</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;