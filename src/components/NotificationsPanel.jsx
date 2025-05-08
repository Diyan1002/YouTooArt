// components/NotificationsPanel.jsx
import { useEffect, useRef } from "react";
import UserAvatar from "../assets/Elli.png";
import FilmfareLogo from "../assets/faw.png";

const notifications = [
  { id: 1, text: "Ranveer Singh just posted a new casting call.", time: "Just Now", avatar: UserAvatar },
  { id: 2, text: "Ranveer Singh liked your post", time: "5 mins ago", avatar: UserAvatar },
  { id: 3, text: "Filmfare liked your post", time: "1 hour ago", avatar: FilmfareLogo },
  { id: 4, text: "50 People applied to your casting call Don 3", time: "3 hours ago", avatar: FilmfareLogo },
  {
    id: 5,
    text: "Muhammad Ali Nizami sent you a connection request",
    time: "5 days ago",
    avatar: UserAvatar,
    action: true,
  },
  { id: 6, text: "Ranveer Singh liked your post", time: "5 days ago", avatar: UserAvatar },
  { id: 7, text: "Filmfare liked your post", time: "6 days ago", avatar: FilmfareLogo },
];

const NotificationsPanel = ({ onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      className="absolute right-0 top-12 w-[360px] max-h-[500px] overflow-y-auto rounded-md shadow-lg bg-white z-50 border scrollbar-hide"
    >
      <div className="p-4 font-semibold text-lg border-b">Notifications</div>
      <ul className="divide-y">
        {notifications.map((item) => (
          <li key={item.id} className="flex p-4 gap-3 items-start">
            <img src={item.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: item.text.replace(/Ranveer Singh/g, "<strong>Ranveer Singh</strong>"),
                }}
              ></div>
              <div className="text-xs text-gray-500">{item.time}</div>
              {item.action && (
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 text-xs bg-green-500 text-white rounded-md">Accept</button>
                  <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-md">Reject</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
