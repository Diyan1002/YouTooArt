import React, { useState } from "react";
import nextGenImage from "../assets/1234.png";

export default function ApplyModal({ casting, onClose, onApply }) {
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply({
      contactNumber,
      contactEmail,
      note
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-sm">
        <div className="flex items-center mb-3">
          <h2 className="text-lg font-semibold">Apply to Call</h2>
        </div>
        <div className="-mx-4">
          <hr />
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2 mt-2">
            <img src={nextGenImage} alt="Casting" className="w-8 h-8 mr-2" />
            <div>
              <h3 className="font-medium text-md">{casting.title}</h3>
              <p className="text-gray-500 text-sm">{casting.author}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <span className="text-gray-600 text-sm block">Location</span>
              <span className="font-medium text-black text-sm">{casting.location}</span>
            </div>
            <div>
              <span className="text-gray-600 text-sm block">Type</span>
              <span className="font-medium text-black text-sm">{casting.type}</span>
            </div>
            <div>
              <span className="text-gray-600 text-sm block">Shoot</span>
              <span className="font-medium text-black text-sm">{casting.shootDays}</span>
            </div>
            <div>
              <span className="text-gray-600 text-sm block">Budget</span>
              <span className="font-medium text-black text-sm">{casting.budget}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">Contact Number</label>
            <input
              type="text"
              placeholder="Enter Contact"
              className="w-full p-1 border rounded-lg text-sm bg-gray-200 focus:bg-white focus:outline-none"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">Contact Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-1 border rounded-lg text-sm bg-gray-200 focus:bg-white focus:outline-none"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Note to Makers</label>
            <textarea
              placeholder="Write your note"
              className="w-full p-1 border rounded-lg text-sm h-20 bg-gray-200 focus:bg-white focus:outline-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border bg-[#FFE5E5] font-bold text-[#FF0000] rounded-3xl text-sm"
            >
              Cancel 
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-black text-white rounded-3xl text-sm"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}