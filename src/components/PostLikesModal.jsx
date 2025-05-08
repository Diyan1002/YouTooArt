// src/components/PostLikesModal.jsx
import React from "react";

const PostLikesModal = ({ likes, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 max-h-[90vh] w-[90%] max-w-md overflow-y-auto shadow-lg hide-scrollbar">
      <div className="mb-4">
  <div className="flex justify-between items-center pb-2">
    <h2 className="text-lg font-semibold">Post Likes ({likes.length})</h2>
    <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">✕</button>
  </div>
  <div className="border-b w-full"></div>
</div>
        {likes.map((user, index) => (
          <div key={index} className="flex items-center gap-3 py-2 last:border-b-0">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-sm">{user.name}</div>
              <div className="text-xs text-gray-500">{user.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostLikesModal;