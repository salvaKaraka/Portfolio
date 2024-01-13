"use client"
import React, { useState } from 'react';

export default function Browser() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <label className="relative flex mx-auto justify-center items-center">
      {/* Contenedor del círculo */}
      <div
        className={`relative w-10 h-10 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:w-14 ${
          isExpanded ? 'w-14' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Icono de búsqueda */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search text-gray-600 dark:text-white w-6 h-6 mx-auto my-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>
      {/* Input de búsqueda */}
      <input
        type="text"
        className={`px-2 py-1 text-base placeholder-gray-600 rounded-full border backdrop-blur-2xl border-black/10 bg-black/5 dark:border-white/5 dark:bg-white/10 w-0 focus:shadow-outline focus:w-full duration-500 transition-all ${
          isExpanded ? 'w-full' : 'w-0'
        }`}
        placeholder="Search..."
        onBlur={() => setIsExpanded(false)}
      />
    </label>
  );
}
