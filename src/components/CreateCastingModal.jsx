import React, { useEffect } from 'react';
import './CreateCastingModal.css'; // Optional for custom scrollbar styles

export default function CreateCastingCallForm({ onClose, onCreate }) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {}; // Collect form data here
    onCreate(formData); // Pass form data to the parent component
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 overflow-hidden">
      <div className="w-[340px] bg-white shadow-lg rounded-xl p-5 text-sm max-h-[90vh] overflow-y-scroll custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }} className="font-semibold text-gray-800 text-base">Create Casting Call</h2>
          <button
            className="text-gray-400 text-xl font-bold hover:text-black"
            onClick={onClose} // Close modal on click
          >
            &times;
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-black">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Project Title"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter short description"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">
              Crew Required <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm">
              <option value="">Crew Type</option>
              <option value="camera">Camera</option>
              <option value="lighting">Lighting</option>
              <option value="sound">Sound</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-black">
              City Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter City Name"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Contact Email</label>
            <input
              type="email"
              placeholder="Enter Contact Email"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter Contact Number"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Role Title</label>
            <input
              type="text"
              placeholder="Role Title"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Role Description</label>
            <textarea
              placeholder="Role Description"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Age Required</label>
            <input
              type="text"
              placeholder="Enter age range"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">
              Height (in Feet) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 5.9"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">
              Gender <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm">
              <option value="">Select Gender</option>
              <option value="male">Male Only</option>
              <option value="female">Female Only</option>
              <option value="any">Any</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Shoot Details</label>
            <textarea
              placeholder="Enter Shoot Details"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-black">Budget / Remuneration</label>
            <input
              type="text"
              placeholder="Enter Your Budget"
              className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 text-sm"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-3xl text-sm bg-[#FFE5E5] font-bold text-[#FF0000]"
              onClick={onClose} // Close modal on click
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-3xl text-sm text-white bg-black hover:bg-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}