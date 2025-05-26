// import React from "react";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="bg-gray-800 text-white p-4 flex justify-between">
//       {/* <h1 className="font-bold text-xl">HR Dashboard</h1> */}
//       <nav className="space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="/analytics">Analytics</Link>
//         <Link href="/bookmarks">Bookmarks</Link>
//       </nav>
//     </header>
//   );
// }


import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* <h1 className="text-2xl font-semibold tracking-wide">HR Dashboard</h1> */}
      <nav className="space-x-6">
        <Link
          href="/"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/analytics"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Analytics
        </Link>
        <Link
          href="/bookmarks"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Bookmarks
        </Link>
      </nav>
    </header>
  );
}
