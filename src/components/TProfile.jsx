import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Bell } from "lucide-react";
import { IoArrowBack } from "react-icons/io5";
import personImage from "../assets/men.png";
import searchImg from "../assets/search.png";
import postImage from "../assets/faw.png";
import connectsIcon from "../assets/connect.png";
import postsIcon from "../assets/post.png";
import activityIcon from "../assets/Activity.svg";
import aboutIcon from "../assets/About.svg";
import { FaEllipsisV } from "react-icons/fa";

const JeremiahProfile = ({ onBack }) => {
  return (
    <div className="flex-1 bg-white h-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:mx-2 rounded-sm border-b shadow-sm bg-white">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start mb-2 sm:mb-0">
          <div
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            className="text-xl font-normal"
          >
            Talent
          </div>
          <button 
            onClick={onBack} 
            className="sm:hidden text-black text-lg flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
          >
            <IoArrowBack />
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-2xl w-full text-sm pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
            />
            <img
              src={searchImg}
              alt="Search"
              className="absolute left-3 top-3 w-4 h-4 brightness-0 opacity-50"
            />
          </div>
          <div className="border border-gray-300 p-2 rounded-full hover:bg-gray-50">
            <Bell className="text-black text-lg w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Scrollable Profile Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4 sm:p-6">
          {/* Profile Header */}
          <button 
            onClick={onBack} 
            className="hidden sm:flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
          >
            <IoArrowBack className="text-lg" />
            <span>Back</span>
          </button>
          
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={personImage}
              alt="Jeremiah Green"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h1 
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} 
              className="text-2xl font-bold"
            >
              Jeremiah Green
            </h1>
            <p className="text-gray-600">Actor | Model | Director</p>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-8 mt-4 text-center">
              <div className="flex flex-col items-center">
                <img src={connectsIcon} alt="Connects" className="w-8 sm:w-10 h-8 sm:h-10 mb-1" />
                <div className="text-xs text-gray-500 uppercase">Connects</div>
                <div className="font-semibold mt-1">124.7K</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={postsIcon} alt="Posts" className="w-8 sm:w-10 h-8 sm:h-10 mb-1" />
                <div className="text-xs text-gray-500 uppercase">Posts</div>
                <div className="font-semibold mt-1">252</div>
              </div>
            </div>

            {/* Connect Button */}
            <div className="flex items-center gap-2 mt-4">
              <button className="bg-black text-white text-sm px-4 py-1 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <FaUserPlus />
                Connect
              </button>
              <div className="border border-gray-200 p-2 rounded-2xl hover:bg-gray-50 cursor-pointer">
                <FaEllipsisV className="text-gray-600" />
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex gap-4 sm:gap-6 mt-6 border-b w-full justify-center pb-2">
              <button className="font-semibold text-black border-b-2 border-black pb-2 flex items-center gap-1 text-sm sm:text-base">
                <img src={activityIcon} alt="Activity" className="w-4 h-4" />
                Activity
              </button>
              <button className="text-gray-500 pb-2 flex items-center gap-1 text-sm sm:text-base hover:text-black transition-colors">
                <img src={aboutIcon} alt="About" className="w-4 h-4" />
                About
              </button>
            </div>
          </div>

          {/* Recent Post */}
          <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <img
                  src={personImage}
                  alt="Jeremiah Green"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="font-semibold">Jeremiah Green</p>
                  <p className="text-xs text-gray-500">2 Days Ago</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-3">
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="font-medium">New Click!</p>
            </div>

            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-[#227BCD]">#Poster #Click #Nature</span>

            <img 
              src={postImage} 
              alt="Post content" 
              className="w-full rounded-md mt-2" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeremiahProfile;