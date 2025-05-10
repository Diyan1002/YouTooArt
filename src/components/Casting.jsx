import React, { useState } from "react";
import { Bell } from "lucide-react";
import searchImg from "../assets/search.png";
import posterImage from "../assets/1234.png";
import locationIcon from "../assets/flag.png";
import userIcon from "../assets/123.png";
import castingCallsIcon from "../assets/1.png";
import appliedIcon from "../assets/2.svg";
import myCastingIcon from "../assets/3.png";
import Appliedd from "../assets/Applied.png";
import trashIcon from "../assets/Delete.svg";
import DeleteModal from "../components/DeleteModal";
import "./casting.css";
import { FaEllipsisV, FaTrash, FaPlus } from "react-icons/fa";
import ApplyModal from "../components/Apply";
import CreateCastingModal from "../components/CreateCastingModal";
import ViewApplications from "../components/ViewApplications";
import { useMediaQuery } from "react-responsive";

export default function CastingCalls() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("castingCalls");
  const [selectedCasting, setSelectedCasting] = useState(0);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleApply = (applicationData) => {
    console.log("Application submitted:", applicationData);
    setShowApplyModal(false);
  };

  const handleDelete = () => {
    console.log("Deleting casting call:", castingCalls[selectedCasting].id);
    setShowDeleteModal(false);
  };
  
  const handleCreate = (castingData) => {
    console.log("Creating new casting call:", castingData);
    setShowCreateModal(false);
  };

  const castingCalls = [...Array(10)].map((_, i) => ({
    id: i,
    title: `The Next Short Film ${i + 1}`,
    author: `James Geidt ${i + 1}`,
    location: "Islamabad",
    type: "Short Film",
    shootDays: "25 Days",
    budget: "$20K",
    publishedDate: "24th April, 2023",
    appliedDate: `${i + 1} day${i > 0 ? 's' : ''} ago`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit for project ${i + 1}.`,
    crewRequired: 1,
    shootDetails: "30 days at Centaurus Mall",
    requirements: {
      age: "23 Years",
      height: "5.9 Feet",
      gender: "Male Only",
    },
    applicants: Math.floor(Math.random() * 20) + 1
  }));

  const [applicationsData, setApplicationsData] = useState([
    {
      name: "Muhammad Ali Nizami",
      timeAgo: "1 Day Ago",
      age: 23,
      height: "5.9",
      gender: "Male",
      experience: 5
    },
  ]);

  const handleCastingSelect = (index) => {
    setSelectedCasting(index);
    if (isMobile) {
      setShowSidebar(false);
      setShowDetail(true);
    }
  };

  const handleBackToList = () => {
    setShowSidebar(true);
    setShowDetail(false);
  };

  return (
    <div className="h-screen w-full bg-white text-black flex flex-col gap-4 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
        <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xl font-cosima">
          Casting Calls
        </div>
        <div className="flex items-center gap-4 px-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-2xl w-full md:w-50 text-sm pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Top Buttons */}
      <div className="flex justify-between items-center px-4">
        <div className="gap-4 flex grid-cols-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button
            style={{ fontFamily: '"SF Pro Display",sans-serif', fontWeight: 500 }}
            className={`px-4 flex font-medium items-center gap-2 rounded-lg py-2 ${
              activeTab === "castingCalls" ? "bg-blue-50 text-black" : ""
            }`}
            onClick={() => {
              setActiveTab("castingCalls");
              if (isMobile) {
                setShowSidebar(true);
                setShowDetail(false);
              }
            }}
          >
            <img
              src={castingCallsIcon}
              alt="Casting Calls"
              className="w-5 h-5"
              style={
                activeTab === "castingCalls"
                  ? {
                      filter:
                        "invert(42%) sepia(193%) saturate(1852%) hue-rotate(1276deg) brightness(96%) contrast(3801%)",
                    }
                  : {}
              }
            />
            Casting Calls
          </button>
          <button
            className={`px-4 flex items-center gap-2 rounded-lg py-2 ${
              activeTab === "applied" ? "bg-blue-50 text-black" : ""
            }`}
            onClick={() => {
              setActiveTab("applied");
              if (isMobile) {
                setShowSidebar(true);
                setShowDetail(false);
              }
            }}
          >
            <img
              src={appliedIcon}
              alt="Applied"
              className="w-5 h-5"
              style={
                activeTab === "applied"
                  ? {
                      filter:
                        "invert(42%) sepia(93%) saturate(1352%) hue-rotate(1246deg) brightness(96%) contrast(3801%)",
                    }
                  : {}
              }
            />
            Applied
          </button>
          <button
            className={`flex items-center gap-2 rounded-lg py-2 px-2 ${
              activeTab === "myCasting" ? "bg-blue-50 text-black" : ""
            }`}
            onClick={() => {
              setActiveTab("myCasting");
              if (isMobile) {
                setShowSidebar(true);
                setShowDetail(false);
              }
            }}
          >
            <img
              src={myCastingIcon}
              alt="My Casting"
              className="w-5 h-5"
              style={
                activeTab === "myCasting"
                  ? {
                      filter:
                        "invert(42%) sepia(93%) saturate(1352%) hue-rotate(176deg) brightness(96%) contrast(3801%)",
                    }
                  : {}
              }
            />
            My Casting Calls
          </button>
        </div>
        {activeTab === "myCasting" && (
          <button 
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-3xl"
            onClick={() => setShowCreateModal(true)}
          >
            <FaPlus className="text-white" />
            <span className="hidden sm:inline">Create Casting Call</span>
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 gap-4 overflow-hidden">
        {activeTab === "castingCalls" && (
          <div className="flex flex-1 gap-4 overflow-hidden">
            {/* Left Sidebar - Show on desktop or when showSidebar is true on mobile */}
            {(showSidebar || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "w-1/3"} border-r shadow overflow-y-auto scrollbar-hide h-full bg-white`}>
                {castingCalls.map((casting, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-3 shadow cursor-pointer mb-4 ${
                      selectedCasting === i
                        ? "bg-blue-50 border-blue-200 border-l-4"
                        : ""
                    }`}
                    onClick={() => handleCastingSelect(i)}
                  >
                    <img
                      src={posterImage}
                      alt="Poster"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="space-y-1">
                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="font-medium text-base"
                      >
                        {casting.title}
                      </h4>
                      <p className="text-sm text-gray-500">{casting.author}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <p className="text-sm">
                          <span className="text-gray-600">Location </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.location}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Type </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.type}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Shoot </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.shootDays}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Budget </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.budget}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Right Detail Section - Show on desktop or when showDetail is true on mobile */}
            {(showDetail || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "flex-1"} border shadow p-6 space-y-4 scrollbar-hide overflow-y-auto`}>
                {isMobile && (
                  <button 
                    onClick={handleBackToList}
                    className="mb-4 flex items-center gap-2 text-blue-500"
                  >
                    ← Back to list
                  </button>
                )}
                
                {castingCalls.length > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <h2
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-xl font-bold"
                      >
                        {castingCalls[selectedCasting].title}
                      </h2>
                      <div className="flex items-center gap-2">
                        {!isMobile && (
                          <button
                            className="bg-black text-white px-4 py-2 rounded-3xl"
                            onClick={() => setShowApplyModal(true)}
                          >
                            Apply Now
                          </button>
                        )}
                        <div className="border border-gray-200 p-2 rounded-2xl">
                          <FaEllipsisV className="text-gray-600 cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    {isMobile && (
                      <button
                        className="w-full bg-black text-white px-4 py-2 rounded-3xl mb-4"
                        onClick={() => setShowApplyModal(true)}
                      >
                        Apply Now
                      </button>
                    )}

                    <p className="text-base text-gray-500">
                      Published on{" "}
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-[#399AF3]"
                      >
                        {castingCalls[selectedCasting].publishedDate}
                      </span>
                    </p>

                    <div className="bg-gray-100 w-screen -mx-6 text-sm">
                      <div className="flex items-center ml-4 gap-2 p-2">
                        <img
                          src={userIcon}
                          alt="User"
                          className="w-8 h-8"
                        />
                        <div className="flex flex-col">
                          <span className="text-gray-400">Posted by</span>
                          <span
                            style={{
                              fontFamily: "SF Pro Display, sans-serif",
                              fontWeight: 800,
                            }}
                            className="font-semibold"
                          >
                            {castingCalls[selectedCasting].author}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-gray-400">
                        Description
                      </span>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black mt-1"
                      >
                        {castingCalls[selectedCasting].description}
                      </p>
                    </div>

                    <hr />

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-400">Location</h3>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black"
                      >
                        <img
                          src={locationIcon}
                          alt="Location"
                          className="inline w-4 h-4 mr-1"
                        />
                        {castingCalls[selectedCasting].location}, Pakistan
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Shoot Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Crew Required
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].crewRequired}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Shoot Details
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].shootDetails}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Budget
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].budget}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Age
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.age}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Height
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.height}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Gender
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.gender}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "applied" && (
          <div className="flex flex-1 gap-4 overflow-hidden">
            {/* Left Sidebar */}
            {(showSidebar || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "w-1/3"} border-r shadow overflow-y-auto scrollbar-hide h-full bg-white`}>
                {castingCalls.map((casting, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-3 shadow cursor-pointer mb-4 ${
                      selectedCasting === i
                        ? "bg-blue-50 border-blue-200 border-l-4"
                        : ""
                    }`}
                    onClick={() => handleCastingSelect(i)}
                  >
                    <img
                      src={posterImage}
                      alt="Poster"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="space-y-1">
                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="font-medium text-base"
                      >
                        {casting.title}
                      </h4>
                      <p className="text-sm text-gray-500">{casting.author}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <p className="text-sm">
                          <span className="text-gray-600">Location </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.location}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Type </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.type}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Shoot </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.shootDays}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Budget </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.budget}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Right Detail Section */}
            {(showDetail || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "flex-1"} border shadow p-6 space-y-4 scrollbar-hide overflow-y-auto`}>
                {isMobile && (
                  <button 
                    onClick={handleBackToList}
                    className="mb-4 flex items-center gap-2 text-blue-500"
                  >
                    ← Back to list
                  </button>
                )}
                
                {castingCalls.length > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <h2
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-xl font-bold"
                      >
                        {castingCalls[selectedCasting].title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center font-semibold gap-2 bg-[#B3FCE2] text-[#008F5C] rounded-3xl px-4 py-2">
                            <img 
                              src={Appliedd} 
                              alt="Applied" 
                              className="w-5 h-5"
                            />
                            <span>
                              Applied {castingCalls[selectedCasting].appliedDate}
                            </span>
                          </div>
                          <button className="bg-black text-white font-semibold px-4 py-2 rounded-3xl">
                            Withdraw
                          </button>
                        </div>
                        <div className="border border-gray-200 p-2 rounded-2xl">
                          <FaEllipsisV className="text-gray-600 cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-gray-500">
                      Published on{" "}
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-[#399AF3]"
                      >
                        {castingCalls[selectedCasting].publishedDate}
                      </span>
                    </p>

                    <div className="bg-gray-100 w-screen -mx-6 text-sm">
                      <div className="flex items-center ml-4 gap-2 p-2">
                        <img
                          src={userIcon}
                          alt="User"
                          className="w-8 h-8"
                        />
                        <div className="flex flex-col">
                          <span className="text-gray-400">Posted by</span>
                          <span
                            style={{
                              fontFamily: "SF Pro Display, sans-serif",
                              fontWeight: 800,
                            }}
                            className="font-semibold"
                          >
                            {castingCalls[selectedCasting].author}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-gray-400">
                        Description
                      </span>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black mt-1"
                      >
                        {castingCalls[selectedCasting].description}
                      </p>
                    </div>

                    <hr />

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-400">Location</h3>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black"
                      >
                        <img
                          src={locationIcon}
                          alt="Location"
                          className="inline w-4 h-4 mr-1"
                        />
                        {castingCalls[selectedCasting].location}, Pakistan
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Shoot Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Crew Required
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].crewRequired}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Shoot Details
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].shootDetails}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Budget
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].budget}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Age
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.age}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Height
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.height}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Gender
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.gender}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "myCasting" && (
          <div className="flex flex-1 gap-4 overflow-hidden">
            {/* Left Sidebar */}
            {(showSidebar || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "w-1/3"} border-r shadow overflow-y-auto scrollbar-hide h-full bg-white`}>
                {castingCalls.map((casting, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-3 shadow cursor-pointer mb-4 ${
                      selectedCasting === i
                        ? "bg-blue-50 border-blue-200 border-l-4"
                        : ""
                    }`}
                    onClick={() => handleCastingSelect(i)}
                  >
                    <img
                      src={posterImage}
                      alt="Poster"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="space-y-1">
                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="font-medium text-base"
                      >
                        {casting.title}
                      </h4>
                      <p className="text-sm text-gray-500">{casting.author}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <p className="text-sm">
                          <span className="text-gray-600">Location </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.location}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Type </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.type}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Shoot </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.shootDays}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Budget </span>
                          <br />
                          <span
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 700,
                            }}
                            className="text-black"
                          >
                            {casting.budget}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Right Detail Section */}
            {(showDetail || !isMobile) && (
              <div className={`${isMobile ? "w-full" : "flex-1"} border shadow p-6 space-y-4 scrollbar-hide overflow-y-auto`}>
                {isMobile && (
                  <button 
                    onClick={handleBackToList}
                    className="mb-4 flex items-center gap-2 text-blue-500"
                  >
                    ← Back to list
                  </button>
                )}
                
                {castingCalls.length > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <h2
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-xl font-bold"
                      >
                        {castingCalls[selectedCasting].title}
                      </h2>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <button 
                            className="flex items-center gap-2 bg-red-100 font-medium text-[#FF0000] px-4 py-2 rounded-full"
                            onClick={() => setShowDeleteModal(true)}
                          >
                            <img src={trashIcon} alt="Delete" className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                          <div className="border border-gray-200 p-2 rounded-2xl">
                            <FaEllipsisV className="text-gray-600 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-gray-500">
                      Published on{" "}
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                        className="text-[#399AF3]"
                      >
                        {castingCalls[selectedCasting].publishedDate}
                      </span>
                    </p>

                    <div className="bg-blue-50 w-full -mx-6 px-6 py-4 text-sm flex justify-between items-center">
                      <div>
                        <p className="text-black text-xs">Applicants</p>
                        <p className="text-blue-600 font-bold text-2xl">{castingCalls[selectedCasting]?.applicants || 0}</p>
                      </div>
                      
                      <button 
                        className="text-blue-500 flex items-center gap-1 font-medium hover:underline"
                        onClick={() => setShowApplications(true)}
                      >
                        View Applications
                        <span>→</span>
                      </button>
                    </div>

                    <div>
                      <span className="font-medium text-gray-400">
                        Description
                      </span>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black mt-1"
                      >
                        {castingCalls[selectedCasting].description}
                      </p>
                    </div>

                    <hr />

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-400">Location</h3>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        className="text-sm text-black"
                      >
                        <img
                          src={locationIcon}
                          alt="Location"
                          className="inline w-4 h-4 mr-1"
                        />
                        {castingCalls[selectedCasting].location}, Pakistan
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Shoot Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Crew Required
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].crewRequired}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Shoot Details
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].shootDetails}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                          className="text-black"
                        >
                          <span className="font-medium text-gray-400">
                            Budget
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].budget}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-[#399AF3]">
                        Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Age
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.age}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Height
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.height}
                        </div>
                        <div className="text-black">
                          <span className="font-medium text-gray-400">
                            Gender
                          </span>
                          <br />{" "}
                          {castingCalls[selectedCasting].requirements.gender}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showApplyModal && (
        <ApplyModal
          casting={castingCalls[selectedCasting]}
          onClose={() => setShowApplyModal(false)}
          onApply={handleApply}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          casting={castingCalls[selectedCasting]}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}
      {showCreateModal && (
        <CreateCastingModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreate}
        />
      )}
      {showApplications && (
        <ViewApplications 
          applications={applicationsData}
          castingCall={castingCalls[selectedCasting]}
          onClose={() => setShowApplications(false)}
        />
      )}
    </div>
  );
}