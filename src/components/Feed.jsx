import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { FaEllipsisV } from "react-icons/fa";
import NotificationsPanel from "../components/NotificationsPanel";

import fawImage from "../assets/faw.png";
import searchImg from "../assets/search.png";
import PhotoIcon from "../assets/Photo.svg";
import TextIcon from "../assets/Text.svg";
import UserAvatar from "../assets/Elli.png";
import LikeIcon from "../assets/like.png";
import CommentIcon from "../assets/comment.png";
import ShareIcon from "../assets/share.png";

import PostLikesModal from "../components/PostLikesModal";

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const searchRef = useRef(null);

  const likesList = [
    { name: "Muhammad Ali Nizami", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Yasir Hafeez", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Qasim Muneer", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Shabir Jan", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Muhammad Saeed", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Muhammad Ali Nizami", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Yasir Hafeez", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Qasim Muneer", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Shabir Jan", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Muhammad Saeed", role: "Actor | Director | Producer", avatar: UserAvatar },
    { name: "Muhammad Ali Nizami", role: "Actor | Director | Producer", avatar: UserAvatar },
  ];

  const recentSearches = [
    { id: 1, name: "Muhammad Ali Nizami", role: "Actor | Director | Producer", avatar: UserAvatar },
    { id: 2, name: "Yasir Hafeez", role: "Actor | Director | Producer", avatar: UserAvatar },
    { id: 3, name: "Don 3 Auditions", role: "", avatar: fawImage },
    { id: 4, name: "Filmfare", role: "Production House", avatar: fawImage },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResultsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="flex-1 bg-gray-100 h-screen overflow-hidden flex flex-col">
      <div className="relative">
        {searchResultsVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSearchResultsVisible(false)}
          ></div>
        )}

        <div
          className={`relative flex justify-between items-center p-3 border-b shadow-sm ${
            searchResultsVisible ? "bg-transparent" : "bg-white"
          }`}
          style={{ zIndex: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 50 }}
        >
          {!searchResultsVisible && (
            <div className="text-xl font-normal whitespace-nowrap hidden sm:block">
              Hi Wajahat!
            </div>
          )}

          <div className="flex items-center gap-4 ml-auto w-full sm:w-auto">
            <div
              className={`relative transition-all duration-300 flex-1 sm:flex-none ${
                searchResultsVisible ? "w-full md:w-[700px]" : "w-full sm:w-[200px]"
              }`}
              ref={searchRef}
            >
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-2xl w-full text-sm pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchResultsVisible(true)}
              />
              <img
                src={searchImg}
                alt="Search"
                className="absolute left-3 top-3 w-4 h-4 brightness-0 opacity-50"
              />
              {searchResultsVisible && (
                <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md border z-50">
                  <div className="flex justify-between items-center px-4 pt-3 pb-1">
                    <span className="text-sm text-gray-500">Recent</span>
                    <button
                      onClick={() => console.log("Clear all")}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Clear All
                    </button>
                  </div>
                  {recentSearches.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium">{item.name}</div>
                          {item.role && (
                            <div className="text-xs text-gray-500">{item.role}</div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => console.log("Remove", item.id)}
                        className="text-gray-400 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <div
                className="border border-gray-300 p-2 rounded-full cursor-pointer"
                onClick={() => setShowNotifications((prev) => !prev)}
              >
                <Bell className="text-black text-lg w-4 h-4" />
              </div>
              {showNotifications && (
                <NotificationsPanel onClose={() => setShowNotifications(false)} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-1 my-1 border rounded-md bg-white">
        <div className="p-4">
          <textarea
            placeholder="Have something to share?"
            className="w-full rounded-md p-2 pl-10 text-sm min-h-[50px] bg-[url('./assets/Elli.png')] bg-no-repeat bg-left-2 bg-[length:36px_36px] placeholder:text-gray-600 focus:placeholder:text-gray-300"
          />
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="flex items-center gap-2 border rounded-2xl px-4 py-2 text-sm bg-cyan-100 hover:bg-gray-50">
              <img src={PhotoIcon} alt="Photo" className="w-5 h-5" /> Photo
            </button>
            <button
              onClick={() => setShowCreatePost(true)}
              className="flex items-center gap-2 border rounded-2xl px-4 py-2 text-sm bg-pink-100 hover:bg-gray-50"
            >
              <img src={TextIcon} alt="Text" className="w-5 h-5" /> Text
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto scroll-smooth hide-scrollbar flex-1 mx-1">
        {[1, 2, 3].map((item) => (
          <div key={item} className="mb-4 border rounded-lg shadow-sm bg-white">
            <div className="p-4">
              <div className="mb-2 flex items-start gap-3">
                <img src={UserAvatar} alt="User Avatar" className="w-9 h-9 rounded-full" />
                <div>
                  <strong className="font-semibold">Muhammad Wajahat</strong>
                  <span className="text-gray-400 text-sm block">2 Days Ago</span>
                </div>
                <div className="ml-auto">
                  <FaEllipsisV className="text-gray-600 cursor-pointer" />
                </div>
              </div>
              <p className="mb-2">
                Hi Guys! Something interesting is on its way! 3 Days to Go. <br />
                <span className="text-blue-600">#Reveal #Audition #FawadKhan</span>
              </p>
              <img
                src={fawImage}
                alt="Fawad Khan"
                className="rounded-lg w-full h-auto max-h-[300px] object-cover"
              />
              <div className="mt-4 pt-4 border-t">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowLikesModal(true)}
                  >
                    <img src={LikeIcon} alt="Likes" className="w-6 h-6" />
                    <span>141.2K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={CommentIcon} alt="Comments" className="w-6 h-6" />
                    <span>14K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={ShareIcon} alt="Shares" className="w-6 h-6" />
                    <span>14K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showLikesModal && (
        <PostLikesModal likes={likesList} onClose={() => setShowLikesModal(false)} />
      )}

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default Feed;
