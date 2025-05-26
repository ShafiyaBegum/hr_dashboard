// "use client";

// import React from "react";
// import useBookmarks from "../../hooks/useBookmarks";

// export default function BookmarksPage() {
//   const { bookmarks, removeBookmark } = useBookmarks();

//   if (bookmarks.length === 0) {
//     return <p className="p-6">No bookmarks yet.</p>;
//   }

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {bookmarks.map((user) => (
//         <div key={user.id} className="bg-white p-4 rounded shadow">
//           <h3 className="font-semibold mb-1">{user.fullName}</h3>
//           <p>Email: {user.email}</p>
//           <p>Dept: {user.department}</p>
//           <div className="mt-3 flex gap-2">
//             <button
//               onClick={() => alert(`Promoted ${user.fullName}!`)}
//               className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
//             >
//               Promote
//             </button>
//             <button
//               onClick={() => alert(`Assigning ${user.fullName} to a project!`)}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
//             >
//               Assign to Project
//             </button>
//             <button
//               onClick={() => removeBookmark(user.id)}
//               className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


'use client';

import { useBookmarks } from '@/context/BookmarkContext';

export default function BookmarksPage() {
  const { bookmarkedUsers, removeBookmark } = useBookmarks();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">📌 Bookmarked Employees</h1>

      {bookmarkedUsers.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedUsers.map((user) => (
            <div key={user.id} className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
              <p>{user.email}</p>
              <p>Department: {user.department}</p>
              <p>Rating: {user.rating} ⭐</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => removeBookmark(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
                <button className="px-3 py-1 bg-green-500 text-white rounded">
                  Promote
                </button>
                <button className="px-3 py-1 bg-indigo-500 text-white rounded">
                  Assign to Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
