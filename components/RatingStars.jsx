import React from "react";

export default function RatingStars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 inline-block ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
      </svg>
    );
  }

  return <div>{stars}</div>;
}
