import React from 'react';
import application1 from "../assets/App.png";
import { FaEllipsisV } from "react-icons/fa";
import acceptIcon from "../assets/accept1.png";
import ellipsisIcon from "../assets/ellips.png";

const RejectedApplications = ({ rejectedApplications, onAccept }) => {
  return (
    <div className="divide-y">
      {rejectedApplications.length > 0 ? (
        rejectedApplications.map((application, index) => (
          <div key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src={application1}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-sm">{application.name}</div>
                  <div className="text-xs text-gray-500">Rejected, {application.timeAgo}</div>
                  <div className="flex justify-between gap-4 text-xs text-gray-700 mt-3">
                    <div className="items-center gap-1">
                      <div className="text-gray-400">Age</div>
                      <div className="font-semibold text-black text-sm">{application.age}</div>
                    </div>
                    <div className="items-center gap-1">
                      <div className="text-gray-400">Height:</div>
                      <div className="font-semibold text-black text-sm">{application.height} Feet</div>
                    </div>
                    <div className="items-center gap-1">
                      <div className="text-gray-400">Gender:</div>
                      <div className="font-semibold text-black text-sm">{application.gender}</div>
                    </div>
                    <div className="items-center gap-1">
                      <div className="text-gray-400">Experience:</div>
                      <div className="font-semibold text-black text-sm">{application.experience} Years</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button 
                      className="bg-[#B3FCE2] text-[#008F5C] text-xs font-semibold px-3 py-2 rounded-3xl flex items-center gap-2"
                      onClick={() => onAccept(application.id)}
                    >
                      <img src={acceptIcon} alt="Accept" className="w-4 h-4" />
                      Accept
                    </button>
                  </div>
                </div>
              </div>
              <img src={ellipsisIcon} alt="Ellipsis" className="w-8 h-8" />
              <div className="border border-gray-200 p-2 rounded-2xl">
                <FaEllipsisV className="text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-gray-500">No rejected applications found.</div>
      )}
    </div>
  );
};

export default RejectedApplications;