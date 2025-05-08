import React, { useState, useEffect } from "react";
import { FaUserPlus, FaEnvelope } from "react-icons/fa";
import { Bell } from "lucide-react";
import personImage from "../assets/men.png";
import searchImg from "../assets/search.png";
import filmfareImage from "../assets/film.png";
import JeremiahProfile from "./TProfile";

const people = [
  {
    name: "Jeremiah Green",
    roles: "Actor | Model | Director",
    image: personImage,
  },
];

const productionHouses = [
  {
    name: "FilmFare",
    roles: "Production House",
    image: filmfareImage,
  },
];

const DramaPeopleList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [position, setPosition] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [viewingProfile, setViewingProfile] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered && !isMobile) return;
    const animationDuration = 200000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime % animationDuration) / animationDuration;
      setPosition(progress * 100);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isHovered, isMobile]);

  useEffect(() => {
    if (isHovered2 && !isMobile) return;
    const animationDuration = 200000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime % animationDuration) / animationDuration;
      setPosition2(progress * 100);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isHovered2, isMobile]);

  const renderCards = (data) =>
    [...Array(10)].fill(data[0]).map((item, index) => (
      <div
        key={index}
        className="bg-blue-50 p-4 rounded-lg text-center min-w-[140px] md:min-w-[160px] shadow-sm"
        onClick={() => setViewingProfile(item)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-2 font-semibold text-sm md:text-base">{item.name}</h3>
        <p className="text-xs md:text-sm text-gray-600">{item.roles}</p>
        <div className="mt-2 md:mt-3 flex justify-center gap-1 md:gap-2">
          <button className="bg-black text-white text-xs md:text-sm px-2 md:px-4 py-1 rounded-full flex items-center gap-1 md:gap-2">
            <FaUserPlus className="text-xs md:text-sm" />
            <span className="hidden sm:inline">Connect</span>
          </button>
          <button className="border border-gray-300 text-xs md:text-sm p-1 md:p-2 rounded-full flex items-center">
            <FaEnvelope className="text-xs md:text-sm" />
          </button>
        </div>
      </div>
    ));

  if (viewingProfile) {
    return <JeremiahProfile onBack={() => setViewingProfile(null)} />;
  }

  return (
    <div className="flex-1 bg-white h-screen overflow-auto flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-3 mx-1 md:mx-2 rounded-sm border-b shadow-sm bg-white">
        <div 
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} 
          className="text-lg md:text-xl font-normal mb-2 md:mb-0"
        >
          Talent
        </div>
        <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search"
              className="p-1 md:p-2 rounded-2xl w-full text-xs md:text-sm pl-8 md:pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              src={searchImg}
              alt="Search"
              className="absolute left-2 md:left-3 top-2 md:top-3 w-3 h-3 md:w-4 md:h-4 brightness-0 opacity-50"
            />
          </div>
          <div className="border border-gray-300 p-1 md:p-2 rounded-full">
            <Bell className="text-black text-xs md:text-lg w-3 h-3 md:w-4 md:h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* People Section */}
      <div className="p-3 md:p-6 overflow-hidden bg-white border">
        <h2 
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} 
          className="text-sm md:text-base font-bold mb-2 md:mb-4"
        >
          People in the Drama Industry
        </h2>
        <div
          className="relative h-48 md:h-64"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onTouchStart={() => isMobile && setIsHovered(true)}
          onTouchEnd={() => isMobile && setIsHovered(false)}
        >
          <div
            className="flex gap-2 md:gap-4 absolute top-0 left-0"
            style={{
              transform: `translateX(-${position}%)`,
              transition: 'transform 0.1s linear',
              width: '200%',
            }}
          >
            {renderCards(people)}
          </div>
        </div>
      </div>

      {/* Production Houses Section */}
      <div className="p-3 md:p-6 overflow-hidden bg-white border">
        <h2 
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} 
          className="text-sm md:text-base font-bold mb-2 md:mb-4"
        >
          Popular Production Houses
        </h2>
        <div
          className="relative h-48 md:h-64"
          onMouseEnter={() => !isMobile && setIsHovered2(true)}
          onMouseLeave={() => !isMobile && setIsHovered2(false)}
          onTouchStart={() => isMobile && setIsHovered2(true)}
          onTouchEnd={() => isMobile && setIsHovered2(false)}
        >
          <div
            className="flex gap-2 md:gap-4 absolute top-0 left-0"
            style={{
              transform: `translateX(-${position2}%)`,
              transition: 'transform 0.1s linear',
              width: '200%',
            }}
          >
            {renderCards(productionHouses)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DramaPeopleList;