// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import RatingStars from "../../../components/RatingStars";
// import { getRandomDepartment, getRandomPerformance } from "../../../lib/mockData";

// export default function EmployeePage({ params }) {
//   const { id } = params;
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const res = await fetch(`https://dummyjson.com/users/${id}`);
//         const data = await res.json();

//         // Augment data with mock department, performance, bio, past performance
//         data.department = getRandomDepartment();
//         data.performance = getRandomPerformance();
//         data.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//         data.pastPerformance = [
//           { year: 2022, rating: getRandomPerformance() },
//           { year: 2023, rating: getRandomPerformance() },
//         ];
//         setUser(data);
//       } catch {
//         router.push("/"); // Redirect if error
//       }
//     }
//     fetchUser();
//   }, [id, router]);

//   if (!user) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</h1>
//       <p className="mb-1">Email: {user.email}</p>
//       <p className="mb-1">Phone: {user.phone}</p>
//       <p className="mb-1">
//         Address: {user.address.address}, {user.address.city}, {user.address.state}
//       </p>
//       <p className="mb-3">Department: {user.department}</p>
//       <RatingStars rating={user.performance} />
//       <p className="mt-3 mb-2 font-semibold">Bio:</p>
//       <p>{user.bio}</p>

//       <p className="mt-4 font-semibold">Past Performance</p>
//       <ul className="list-disc ml-5">
//         {user.pastPerformance.map((item) => (
//           <li key={item.year}>
//             {item.year}: <RatingStars rating={item.rating} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const TABS = ['Overview', 'Projects', 'Feedback'];

export default function EmployeeDetail() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [loading, setLoading] = useState(true);

  const mockPerformance = [
    'Exceeded Q1 targets',
    'Led cross-functional project',
    'Improved onboarding process',
    'Received employee of the month',
    'Delivered team training sessions',
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users/${params.id}`);
      const data = await res.json();
      data.department = generateRandomDepartment();
      data.rating = Math.floor(Math.random() * 5) + 1;
      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, [params.id]);

  const generateRandomDepartment = () => {
    const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];
    return departments[Math.floor(Math.random() * departments.length)];
  };

  if (loading) return <div className="p-10 text-center text-gray-500">Loading...</div>;
  if (!user) return <div className="p-10 text-center text-red-500">User not found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 underline mb-4 inline-block">← Back to Dashboard</Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <img src={user.image} alt="User" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Department: {user.department}</p>
            <p className="text-sm text-gray-500">Phone: {user.phone}</p>
            <p className="text-sm text-gray-500">Address: {user.address?.address}, {user.address?.city}</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < user.rating ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
              <span className={`ml-2 text-sm px-2 rounded-full ${getRatingColor(user.rating)}`}>
                {user.rating} Stars
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Bio</h3>
          <p className="text-gray-700 mt-1">
            {user.firstName} is a valuable member of our {user.department} team with strong problem-solving skills and a drive for excellence.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Past Performance</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {mockPerformance.sort(() => 0.5 - Math.random()).slice(0, 3).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* TABS */}
        <div className="mt-8">
          <div className="flex border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {activeTab === 'Overview' && (
              <p className="text-gray-700">
                {user.firstName} is known for a proactive attitude and attention to detail. A key contributor in multiple successful projects.
              </p>
            )}
            {activeTab === 'Projects' && (
              <ul className="list-disc pl-5 text-gray-700">
                <li>Project Phoenix - Optimization Initiative</li>
                <li>Employee Engagement Campaign</li>
                <li>UI Redesign Sprint (Q2)</li>
              </ul>
            )}
            {activeTab === 'Feedback' && (
              <div className="space-y-2 text-gray-700">
                <p>🌟 "Great team player!"</p>
                <p>🌟 "Very punctual and delivers on time."</p>
                <p>🌟 "Has leadership potential."</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility to style rating badge
function getRatingColor(rating) {
  if (rating >= 4) return 'bg-green-100 text-green-700';
  if (rating >= 3) return 'bg-yellow-100 text-yellow-700';
  return 'bg-red-100 text-red-700';
}
