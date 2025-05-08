import React, { useState } from "react";
import RanveerSinghImg from '../assets/ram.png';
import FilmfareImg from '../assets/film.png';
import CastingCallImg from '../assets/cas.png';
import ProfileImg from '../assets/image.png'; // Assuming a placeholder image for connections
import AcceptIcon from '../assets/accept.png'; // Import your accept icon
import RejectIcon from '../assets/reject.png'; // Import your reject icon

const Notifications = () => {
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [showAllConnections, setShowAllConnections] = useState(false);

  const notifications = [
    {
      id: 1,
      img: RanveerSinghImg,
      name: "Ranveer Singh",
      text: "just posted a new casting call.",
      time: "Just now"
    },
    {
      id: 2,
      img: RanveerSinghImg,
      name: "Ranveer Singh",
      text: "liked your post.",
      time: "5 mins ago"
    },
    {
      id: 3,
      img: FilmfareImg,
      name: "Filmfare",
      text: "liked your post.",
      time: "1 hour ago"
    },
    {
      id: 4,
      img: CastingCallImg,
      name: "50 People",
      text: "applied to your casting call Don 3.",
      time: "3 hours ago"
    }
  ];

  const connections = [...Array(4)].map((_, i) => ({
    id: i,
    img: ProfileImg,
    name: `Muhammad Ali Nizami`,
    role: "Actor | Director | Producer"
  }));

  return (
    <aside className="w-80 bg-white p-4 shadow-lg h-[calc(105vh-2rem)] flex flex-col">
      {/* Notifications Section */}
      <div className="mb-6 flex-1 overflow-hidden flex flex-col">
        <h2 className="font-semibold sticky top-0 bg-white py-2 z-10">
          Notifications
        </h2>
        <div className={`text-sm mt-2 space-y-2 flex-1 ${showAllNotifications ? 'overflow-y-auto scrollbar-hide pr-2' : 'overflow-hidden'}`}>
          {(showAllNotifications ? notifications : notifications.slice(0, 3)).map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <img 
                src={notification.img} 
                alt="Notification" 
                className="w-7 h-7 rounded-full object-cover mt-0.5"
              />
              <div>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="font-medium text-black">{notification.name}</span>{' '}
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-gray-400">{notification.text}</span>{' '}
                <br />
                <span className="text-gray-500">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
        {notifications.length > 3 && (
          <button style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} 
            onClick={() => setShowAllNotifications(!showAllNotifications)}
            className="mt-2 w-full rounded-md px-4 py-2 text-sm bg-gray-100 text-[#399AF3] transition-colors sticky bottom-0"
          >
            {showAllNotifications ? "Show Less" : "Show All"}
          </button>
        )}
      </div>

      {/* Connection Requests Section */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <h2 className="font-semibold sticky top-0 bg-white py-2 z-10">Connection Requests</h2>
        <div className={`text-sm mt-2 space-y-4 flex-1 ${showAllConnections ? 'overflow-y-auto scrollbar-hide pr-2' : 'overflow-hidden'}`}>
          {(showAllConnections ? connections : connections.slice(0, 3)).map((connection) => (
            <div key={connection.id} className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <img 
                  src={connection.img} 
                  alt={connection.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="font-medium text-black">{connection.name}</div>
                  <div className="text-gray-400 text-xs">{connection.role}</div>
                </div>
              </div>
              <div className="flex gap-2 pl-12 -mt-1">
                <button className="flex items-center gap-1 bg-green-200  text-green-700 rounded-2xl px-2 py-1 text-xs transition-colors">
                  <img src={AcceptIcon} alt="Accept" className="w-5 h-5" />
                  Accept
                </button>
                <button className="flex items-center gap-1 bg-pink-200  text-red-500 rounded-2xl px-2 py-1 text-xs transition-colors">
                  <img src={RejectIcon} alt="Reject" className="w-5 h-5" />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
        {connections.length > 3 && (
          <button style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            onClick={() => setShowAllConnections(!showAllConnections)}
            className="mt-2 w-full rounded-md px-4 py-2 text-sm bg-gray-100 text-[#399AF3]  transition-colors sticky bottom-0"
          >
            {showAllConnections ? "Show Less" : "Show All"}
          </button>
        )}
      </div>

      {/* Scrollbar Hide CSS (if Tailwind plugin not available) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </aside>
  );
};

export default Notifications;