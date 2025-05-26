// 'use client'; // Needed if we use client-side features later

// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   // Fetch user data
//   useEffect(() => {
//     fetch('https://dummyjson.com/users?limit=20')
//       .then((res) => res.json())
//       .then((data) => {
//         const updatedUsers = data.users.map((user) => ({
//           ...user,
//           department: generateRandomDepartment(),
//           rating: Math.floor(Math.random() * 5) + 1, // 1 to 5
//         }));
//         setUsers(updatedUsers);
//       });
//   }, []);

//   // Helper function
//   const generateRandomDepartment = () => {
//     const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];
//     return departments[Math.floor(Math.random() * departments.length)];
//   };

//   return (
//     <main className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">HR Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
//             <p>Email: {user.email}</p>
//             <p>Age: {user.age}</p>
//             <p>Department: {user.department}</p>
//             <div className="flex items-center my-2">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i}>
//                   {i < user.rating ? '⭐' : '☆'}
//                 </span>
//               ))}
//             </div>
//             <div className="flex space-x-2 mt-3">
//               <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
//               <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Bookmark</button>
//               <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Promote</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import styles from './UserCard.module.css';

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users?limit=20')
//       .then((res) => res.json())
//       .then((data) => {
//         const updatedUsers = data.users.map((user) => ({
//           ...user,
//           department: generateRandomDepartment(),
//           rating: Math.floor(Math.random() * 5) + 1,
//         }));
//         setUsers(updatedUsers);
//       });
//   }, []);

//   const generateRandomDepartment = () => {
//     const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];
//     return departments[Math.floor(Math.random() * departments.length)];
//   };

//   return (
//     <main className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
//         HR Dashboard
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {users.map((user) => (
//           <div key={user.id} className={styles.card}>
//             <div>
//               <h2 className={styles.title}>
//                 {user.firstName} {user.lastName}
//               </h2>
//               <p className={styles.info}>
//                 <strong>Email:</strong> {user.email}
//               </p>
//               <p className={styles.info}>
//                 <strong>Age:</strong> {user.age}
//               </p>
//               <p className={styles.info}>
//                 <strong>Department:</strong> {user.department}
//               </p>

//               <div className={styles.rating} aria-label="Performance rating">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`${styles.star} ${i < user.rating ? '' : styles.empty}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     aria-hidden="true"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.785.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L3.603 9.382c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.955z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>

//             <div className={styles.buttonGroup}>
//               <button className={`${styles.button} ${styles.view}`}>View</button>
//               <button className={`${styles.button} ${styles.bookmark}`}>Bookmark</button>
//               <button className={`${styles.button} ${styles.promote}`}>Promote</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import styles from './UserCard.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useBookmarks } from '@/context/BookmarkContext'



export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const router = useRouter();
  const { addBookmark } = useBookmarks();



  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then((res) => res.json())
      .then((data) => {
        const updatedUsers = data.users.map((user) => ({
          ...user,
          department: generateRandomDepartment(),
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        setUsers(updatedUsers);
      });
  }, []);

  const generateRandomDepartment = () => {
    const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];
    return departments[Math.floor(Math.random() * departments.length)];
  };

  // Handle changes for multi-select departments filter
  const toggleDepartment = (dept) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  // Handle changes for multi-select ratings filter
  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();

    // Check search matches name, email or department
    const matchesSearch =
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.department.toLowerCase().includes(term);

    // Check department filter
    const matchesDepartment =
      selectedDepartments.length === 0 || selectedDepartments.includes(user.department);

    // Check rating filter
    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(user.rating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];
  const ratings = [1, 2, 3, 4, 5];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        HR Dashboard
      </h1>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="max-w-xl mx-auto flex justify-between gap-4 mb-8">

        {/* Department Multi-Select */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Departments</label>
          <div className="flex flex-wrap gap-2 max-w-xs">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => toggleDepartment(dept)}
                className={`px-3 py-1 rounded-full border cursor-pointer select-none
                  ${
                    selectedDepartments.includes(dept)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Multi-Select */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Ratings</label>
          <div className="flex gap-2">
            {ratings.map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => toggleRating(rate)}
                className={`px-3 py-1 rounded-full border cursor-pointer select-none
                  ${
                    selectedRatings.includes(rate)
                      ? 'bg-yellow-500 text-white border-yellow-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {[...Array(rate)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className={styles.card}>

              <div>
                <h2 className={styles.title}>
                  {user.firstName} {user.lastName}
                </h2>
                <p className={styles.info}>
                  <strong>Email:</strong> {user.email}
                </p>
                <p className={styles.info}>
                  <strong>Age:</strong> {user.age}
                </p>
                <p className={styles.info}>
                  <strong>Department:</strong> {user.department}
                </p>

                <div className={styles.rating} aria-label="Performance rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`${styles.star} ${i < user.rating ? '' : styles.empty}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.785.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L3.603 9.382c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.955z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className={styles.buttonGroup}>
                <button className={`${styles.button} ${styles.view}`}onClick={() => router.push(`/employee/${user.id}`)}>View</button>
                <button className={`${styles.button} ${styles.bookmark}`}onClick={() => addBookmark(user)}>Bookmark</button>
                <button className={`${styles.button} ${styles.promote}`}>Promote</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No users found.</p>
        )}
      </div>
    </main>
  );
}
