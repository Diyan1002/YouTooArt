import React, { useState } from "react";
import { Bell } from "lucide-react";
import personImage from "../assets/pro.png";
import searchImg from "../assets/search.png";
import postImage from "../assets/faw.png";
import connectsIcon from "../assets/connect.png";
import postsIcon from "../assets/post.png";
import activityIcon from "../assets/Activity.svg";
import aboutIcon from "../assets/About.svg";
import workk from "../assets/work.svg";
import { FaEllipsisV } from "react-icons/fa";
import Editt from "../assets/edit.png";
import verifiedIcon from "../assets/verified.png";
import locationIcon from "../assets/flag.png";
import editIcon from "../assets/edit1.png";
import plusIcon from "../assets/plus1.png";

import videoThumb from "../assets/video.png"; // thumbnail placeholder
import workPhoto1 from "../assets/image1.png"; // replace with your images
import workPhoto2 from "../assets/image1.png"; // etc.
import workPhoto3 from "../assets/image1.png";

const MuhammadWajahatProfile = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Activity");

   const videos = Array(5).fill({
    title: "SPECIAL REPORT: What’s the Trouble in Gilgit-Baltistan?",
    url: "https://youtu.be/JXCRWXBA0IE",
    thumbnail: videoThumb,
  });
    const photos = [workPhoto1, workPhoto2, workPhoto3, workPhoto1, workPhoto2];

  return (
    <div className="flex-1 bg-white h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
        <div className="flex items-center gap-2">
          <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xl font-normal">
            My Profile
          </div>
        </div>
        <div className="flex items-center gap-4 px-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-2xl w-full md:w-50 text-sm pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
            />
            <img
              src={searchImg}
              alt="Search"
              className="absolute left-3 top-3 w-4 h-4 brightness-0 opacity-50"
            />
          </div>
          <div className="border border-gray-300 p-2 rounded-full">
            <Bell className="text-black text-lg w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative">
              <img
                src={personImage}
                alt="Muhammad Wajahat"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <img
                src={verifiedIcon}
                alt="Verified"
                className="absolute bottom-0 right-0 mb-4 w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="text-2xl font-bold">
              Muhammad Wajahat
            </h1>
            <p className="text-gray-600">Actor | Director</p>

            {/* Stats */}
            <div className="flex gap-8 mt-4 text-center">
              <div className="flex flex-col items-center">
                <img src={connectsIcon} alt="Connects" className="w-10 h-10 mb-1" />
                <div className="text-xs text-gray-500 uppercase">Connects</div>
                <div className="font-semibold mt-1">124.7K</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={postsIcon} alt="Posts" className="w-10 h-10 mb-1" />
                <div className="text-xs text-gray-500 uppercase">Posts</div>
                <div className="font-semibold mt-1">252</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button className="bg-black text-white text-sm px-4 py-1 rounded-full flex items-center gap-2">
                <img src={Editt} alt="Edit" className="w-3 h-3" />
                Edit Profile
              </button>
              <div className="border border-gray-200 p-2 rounded-2xl">
                <FaEllipsisV className="text-gray-600 cursor-pointer" />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mt-6 border-b w-full justify-center pb-2">
              <button
                className={`pb-2 flex items-center gap-1 ${
                  activeTab === "Activity"
                    ? "font-semibold text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("Activity")}
              >
                <img src={activityIcon} alt="Activity" className="w-4 h-4" />
                Activity
              </button>
              <button
                className={`pb-2 flex items-center gap-1 ${
                  activeTab === "About"
                    ? "font-semibold text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("About")}
              >
                <img src={aboutIcon} alt="About" className="w-4 h-4" />
                About
              </button>
              <button
                className={`pb-2 flex items-center gap-1 ${
                  activeTab === "MyWork"
                    ? "font-semibold text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("MyWork")}
              >
                <img src={workk} alt="My Work" className="w-4 h-4" />
                My Work
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "Activity" && (
              <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <img
                      src={personImage}
                      alt="Muhammad Wajahat"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="font-semibold">
                        Muhammad Wajahat
                      </p>
                      <p className="text-xs text-gray-500">2 Days Ago</p>
                    </div>
                  </div>
                  <button className="text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01" />
                    </svg>
                  </button>
                </div>
                <div className="mb-3">
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="font-medium">
                    New Click!
                  </p>
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-[#227BCD]">
                  #Reveal #Audition #FawadKhan
                </span>
                <img src={postImage} alt="Post content" className="w-full rounded-md mt-2" />
              </div>
            )}

            {activeTab === "About" && (
              <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg border border-gray-200 space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Bio</p>
                  <p>
                    Netus vel neque vulputate nam nam sit amet a pulvinar. Vitae consequat sed sit interdum nulla. Libero
                    viverra facilisis.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Personal Website</p>
                  <p className="text-blue-600 underline cursor-pointer">www.be.net/WajahatUIUX</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Experience</p>
                  <p>5+ Years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                 
                  <p> <img
                                         src={locationIcon}
                                         alt="Location"
                                         className="inline w-4 h-4 mr-1"
                                       /> Islamabad, Pakistan</p>
                </div>
              </div>
            )}

{activeTab === "MyWork" && (
  <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg border border-gray-200 space-y-6">
    {/* Videos Section */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Videos (5)</h2>
        <div className="flex items-center space-x-2">
          <img src={editIcon} alt="Edit" className="w-8 h-8 cursor-pointer" />
          <img src={plusIcon} alt="Add" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="border rounded-md overflow-hidden shadow-sm">
            <img src={video.thumbnail} alt="Video thumbnail" className="w-full" />
            <div className="p-2 text-sm">
              <p className="font-medium">{video.title}</p>
              <a href={video.url} className="text-blue-600 text-xs underline" target="_blank" rel="noopener noreferrer">
                {video.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Photos Section */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Photos (5)</h2>
        <div className="flex items-center space-x-2">
          <img src={editIcon} alt="Edit" className="w-8 h-8 cursor-pointer" />
          <img src={plusIcon} alt="Add" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Work ${index + 1}`} className="rounded-md object-cover w-full h-48" />
        ))}
      </div>
    </div>
  </div>
)}


          </div>
        </div>
      </div>
    </div>
  );
};

export default MuhammadWajahatProfile;
