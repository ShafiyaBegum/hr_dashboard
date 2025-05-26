// "use client";

// import React, { createContext, useState } from "react";

// export const BookmarkContext = createContext();

// export function BookmarkProvider({ children }) {
//   const [bookmarks, setBookmarks] = useState([]);

//   const addBookmark = (user) => {
//     setBookmarks((prev) => {
//       if (prev.find((b) => b.id === user.id)) return prev;
//       return [...prev, user];
//     });
//   };

//   const removeBookmark = (id) => {
//     setBookmarks((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
//       {children}
//     </BookmarkContext.Provider>
//   );
// }

'use client';
import { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedUsers, setBookmarkedUsers] = useState([]);

  const addBookmark = (user) => {
    if (!bookmarkedUsers.find((u) => u.id === user.id)) {
      setBookmarkedUsers([...bookmarkedUsers, user]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarkedUsers(bookmarkedUsers.filter((u) => u.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedUsers, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
