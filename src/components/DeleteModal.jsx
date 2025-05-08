import React from "react";
import nextGenImage from "../assets/1234.png";

export default function DeleteModal({ casting, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 550 }} className="text-xl font-semibold mb-4">Delete Casting Call</h3>
        <p className="text-gray-600 mb-6 font-medium">
          Are you sure you want to delete this casting call?
        </p>

        {/* Casting Call Info */}
        <div className="items-center border bg-gray-100 p-4 w-500 -mx-6 mb-6">
  <div className="flex items-center gap-4 mb-4">
    <img src={nextGenImage} alt="Casting" className="w-12 h-12 rounded" />
    <div>
      <h4 className="font-bold text-lg">{casting.title}</h4>
      <p className="text-gray-500">{casting.author}</p>
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-4">
    <div>
      <p className="text-gray-500 text-sm">Location:</p>
      <p className="font-semibold">{casting.location}</p>
    </div>
    <div>
      <p className="text-gray-500 text-sm">Shoot:</p>
      <p className="font-semibold">{casting.shootDays}</p>
    </div>
    <div>
      <p className="text-gray-500 text-sm">Type:</p>
      <p className="font-semibold">{casting.type}</p>
    </div>
    <div>
      <p className="text-gray-500 text-sm">Budget:</p>
      <p className="font-semibold">{casting.budget}</p>
    </div>
  </div>
</div>

        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-black text-sm mb-6">
          Deleting a casting call is an irreversible action and will remove all
          associated information and submissions.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border text-[#399AF3] rounded-3xl bg-[#E7F3FE]"
          >
            Keep
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-[#FFE5E5] font-bold text-[#FF0000] rounded-3xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}