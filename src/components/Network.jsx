import React, { useState } from "react";
import { Bell, Mail } from "lucide-react"; // Added Mail icon
import searchImg from "../assets/search.png";
import tickImg from "../assets/accept.png"; // Import tick image
import crossImg from "../assets/reject.png"; // Import cross image

import muhammadAliImg from "../assets/Ali.png";
import alizaSheikhImg from "../assets/aliza-sheikh.png";
import jamesPhilipsImg from "../assets/james-philips.png";
import barbaraGordonImg from "../assets/barbara-gordon.png";
import dianaPrinceImg from "../assets/diana-prince.png";
import loisLaneImg from "../assets/lois-lane.png";
import kadenFaneImg from "../assets/kaden-fane.png";

const Network = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const requests = [
    { id: 1, name: "Muhammad Ali Nizami", time: "Just Now", image: muhammadAliImg },
    { id: 2, name: "Aliza Sheikh", time: "1 Day Ago", image: alizaSheikhImg },
  ];

  const connections = Array(10).fill([
    { id: 1, name: "James Phillips", image: jamesPhilipsImg },
    { id: 2, name: "Barbara Gordon", image: barbaraGordonImg },
    { id: 3, name: "Diana Prince", image: dianaPrinceImg },
    { id: 4, name: "Lois Lane", image: loisLaneImg },
    { id: 5, name: "Kaden Fane", image: kadenFaneImg },
  ]).flat();

  return (
    <div className="flex-1 bg-white h-screen overflow-auto p-6 font-inter">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-xl font-medium">Network</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-10 rounded-full border text-sm bg-gray-100 focus:bg-white focus:outline-none"
            />
            <img src={searchImg} alt="Search" className="absolute left-3 top-2.5 w-4 h-4 opacity-60" />
          </div>
          <div className="p-2 rounded-full border cursor-pointer">
            <Bell className="w-5 h-5" />
          </div>
        </div>
      </div>

     {/* Requests */}
<div className="mb-8">
  <h2 className="text-lg font-semibold mb-4">Requests ({requests.length})</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {requests.map((req) => (
      <div key={req.id} className="p-3 bg-blue-50 rounded-lg ">
        <div className="gap-3">
          <img
            src={req.image}
            alt={req.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{req.name}</p>
            <p className="text-sm text-gray-500">{req.time}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="bg-green-200 text-green-600 w-auto px-3 h-8 rounded-full flex items-center justify-center hover:bg-green-200 gap-2">
          <img src={tickImg} alt="Accept" className="w-4 h-4" />
            Accept
          </button>
          <button className="bg-red-200 text-red-600 w-auto px-3 h-8 rounded-full flex items-center justify-center hover:bg-red-200 gap-2">
          <img src={crossImg} alt="Reject" className="w-4 h-4" />
           Reject
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* Connections */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Connections ({connections.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {connections.map((con, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
              <img src={con.image} alt={con.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
              <p className="font-medium">{con.name}</p>
              <p className="text-sm text-gray-500">Connected, Yesterday</p>
              <div className="flex justify-center gap-2 mt-2">
                <button className="text-sm px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800">Remove</button>
                <button className="p-2 text-gray-600 hover:text-blue-500">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
