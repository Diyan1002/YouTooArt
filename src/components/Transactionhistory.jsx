import React, { useState } from "react";
import { Bell } from "lucide-react";
import searchImg from "../assets/search.png";
import checkIcon from "../assets/check1.png";
import cancelIcon from "../assets/cancel1.png";
import "./Transaction.css";

const transactionsData = {
  Today: [
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: true,
      time: "12:00 Am",
      id: "#TID1212",
    },
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: false,
      time: "11:53 Am",
      id: "#TID1212",
    },
  ],
  "26 May": [
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: true,
      time: "12:00 Am",
      id: "#TID1212",
    },
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: true,
      time: "12:00 Am",
      id: "#TID1212",
    },
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: false,
      time: "11:53 Am",
      id: "#TID1212",
    },
  ],
  "25 May": [
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: true,
      time: "12:00 Am",
      id: "#TID1212",
    },
    {
      title: "6 Months Subscription to apply for Casting Call.",
      amount: 500,
      success: true,
      time: "12:00 Am",
      id: "#TID1212",
    },
  ],
};

const Transactionhistory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getTotal = (transactions) =>
    transactions.reduce((acc, tx) => acc + (tx.success ? tx.amount : 0), 0);

  return (
    <div className="flex-1 bg-white h-screen flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
      <div className="text-xl font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
        Transaction History
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
  
    {/* Transactions */}
    <div className="flex-1 px-4 py-4 space-y-6 overflow-auto hide-scrollbar">
      {Object.entries(transactionsData).map(([date, transactions]) => (
        <div key={date}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold text-gray-400">{date}</h2>
            <span className="text-sm font-semibold text-blue-600">
              ₹{getTotal(transactions)}
            </span>
          </div>
  
          <div className="space-y-3">
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-3 bg-gray-50 rounded-md shadow-sm border"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={tx.success ? checkIcon : cancelIcon}
                    alt={tx.success ? "Success" : "Failed"}
                    className="w-8 h-8 mt-1"
                  />
                  <div>
                    <p className="text-sm text-gray-800 font-medium">
                      <span className="text-black font-bold">6 Months Subscription</span>{" "}
                      <span className="text-gray-900">to apply for Casting Call.</span>
                    </p>
                    <p className="text-xs text-blue-600">{tx.id}</p>
                    <p className="text-xs text-gray-400">{tx.time}</p>
                  </div>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    tx.success ? "text-green-600" : "text-red-500"
                  }`}
                >
                  ₹{tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Transactionhistory;
