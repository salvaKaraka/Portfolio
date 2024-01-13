"use client"
import React, { useState } from 'react';

export default function Browser() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <label className="flex">


        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search text-gray-600 dark:text-white w-6 h-6 "
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

      <input
        type="text"
        className={`px-2 py-1 text-base bg-transparent focus:placeholder-gray-600 rounded-full focus:border focus:backdrop-blur-2xl focus:border-black/10 focus:bg-black/5 
        focus:dark:border-white/5 focus:dark:bg-white/10 w-0  focus:block focus:shadow-outline focus:w-[10rem] duration-300 transition-all`}
        placeholder="Search..."
      />
    </label>
  );
}
