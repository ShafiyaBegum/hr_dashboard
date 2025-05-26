import React, { useContext } from "react";
import RatingStars from "./RatingStars";
import { BookmarkContext } from "../context/BookmarkContext";

export default function UserCard({ user, onView }) {
  const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext);

  const isBookmarked = bookmarks.some((b) => b.id === user.id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-1">{user.fullName}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">Dept: {user.department}</p>
        <div className="my-2">
          <RatingStars rating={user.performance} />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onView(user.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          View
        </button>
        {!isBookmarked ? (
          <button
            onClick={() => addBookmark(user)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded"
          >
            Bookmark
          </button>
        ) : (
          <button
            onClick={() => removeBookmark(user.id)}
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove Bookmark
          </button>
        )}
        <button
          onClick={() => alert(`Promoted ${user.fullName}!`)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          Promote
        </button>
      </div>
    </div>
  );
}
