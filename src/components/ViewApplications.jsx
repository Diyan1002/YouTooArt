import React, { useState } from 'react';
import RejectedApplications from '../components/RejectedApplications';
import application1 from "../assets/App.png";
import { FaEllipsisV } from "react-icons/fa";
import receivedIcon from "../assets/received.png";
import rejectedIcon from "../assets/rejected.png";
import wishlistIcon from "../assets/whislist.png";
import acceptIcon from "../assets/accept1.png";
import rejectIcon from "../assets/reject1.png";
import ellipsisIcon from "../assets/ellips.png";

export default function ViewApplications({ applications, onClose, castingCall }) {
  const [activeTab, setActiveTab] = useState("received");
  const [allApplications, setAllApplications] = useState(applications);

  // Function to handle rejecting an application
  const handleReject = (applicationId) => {
    setAllApplications(prevApps => 
      prevApps.map(app => 
        app.id === applicationId ? { ...app, status: "rejected", rejectedAt: new Date().toISOString() } : app
      )
    );
  };

  // Function to handle accepting an application (from rejected tab)
  const handleAccept = (applicationId) => {
    setAllApplications(prevApps => 
      prevApps.map(app => 
        app.id === applicationId ? { ...app, status: "received" } : app
      )
    );
  };

  // Filter applications based on status
  const receivedApplications = allApplications.filter(app => app.status !== "rejected");
  const rejectedApplications = allApplications.filter(app => app.status === "rejected");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-end z-50 overflow-hidden">
      <div className="w-[380px] bg-white h-full shadow-lg overflow-y-auto">
        <div className="p-4 sticky top-0 bg-white border-b flex justify-between items-center">
          <div>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="font-bold text-lg">Applications</h2>
            <div className="text-xs text-[#399AF3] font-bold cursor-pointer">{allApplications.length} Applicants</div>
          </div>
          <button
            className="text-gray-400 text-xl font-bold hover:text-black"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="p-4 border-b bg-gray-100 space-y-1">
          <h3 className="font-medium text-sm">{castingCall.title}</h3>
          <div className="text-xs text-gray-600">Published, 2 Days Ago</div>
          <div className="grid grid-cols-2 text-xs text-gray-700 gap-2 pt-2">
            <div>
              <div className="text-gray-400">Location</div>
              <div className="text-black">{castingCall.location}</div>
              <div className="text-gray-400">Shoot</div>
              <div className="text-black">25 Days</div>
            </div>
            <div>
              <div className="text-gray-400">Type</div>
              <div className="text-black">{castingCall.type}</div>
              <div className="text-gray-400">Budget</div>
              <div className="text-black">$20K</div>
            </div>
          </div>
        </div>

        <div className="p-4 border-b cursor-pointer flex space-x-6 text-sm">
          <div
            className={`flex items-center gap-2 font-medium ${
              activeTab === "received" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("received")}
          >
            <img
              src={receivedIcon}
              alt="Received"
              className="w-5 h-5"
            />
            Received
          </div>
          <div
            className={`flex items-center gap-2 ${
              activeTab === "rejected" ? "text-black font-semibold" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("rejected")}
          >
            <img
              src={rejectedIcon}
              alt="Rejected"
              className="w-5 h-5"
            />
            Rejected
          </div>
          <div
            className={`flex items-center gap-2 ${
              activeTab === "wishlist" ? "text-black font-semibold" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("wishlist")}
          >
            <img
              src={wishlistIcon}
              alt="Wishlist"
              className="w-5 h-5"
            />
            Wishlist
          </div>
        </div>

        {activeTab === "received" && (
          <div className="divide-y">
            {receivedApplications.map((application, index) => (
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
                      <div className="text-xs text-gray-500">Applied, {application.timeAgo}</div>
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
                        <button className="bg-[#B3FCE2] text-[#008F5C] text-xs font-semibold px-3 py-2 rounded-3xl flex items-center gap-2">
                          <img src={acceptIcon} alt="Accept" className="w-4 h-4" />
                          Accept
                        </button>
                        <button 
                          className="bg-[#FFE5E5] text-[#FF0000] text-xs font-semibold px-3 py-2 rounded-3xl flex items-center gap-2"
                          onClick={() => handleReject(application.id)}
                        >
                          <img src={rejectIcon} alt="Reject" className="w-5 h-5" />
                          Reject
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
            ))}
          </div>
        )}

        {activeTab === "rejected" && (
          <RejectedApplications 
            rejectedApplications={rejectedApplications} 
            onAccept={handleAccept}
          />
        )}

        {activeTab === "wishlist" && (
          <div className="p-4 text-gray-500">No applications in wishlist.</div>
        )}

        <div className="p-4 mt-28 bottom-0 bg-white border-t">
          <button className="w-full py-2 text-sm font-semibold text-[#FF0000] bg-[#FFE5E5] border rounded-3xl flex items-center justify-center gap-2">
            Delete This Call
          </button>
        </div>
      </div>
    </div>
  );
}