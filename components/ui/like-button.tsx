"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  pTitle: string;
}

export default function LikeButton({ pTitle }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  //Get the amount of likes
  useEffect(() => {
    // Can use async inside a function thats not the export one
    const fetchLikes = async () => {
      const response = await fetch(`/api/like?productName=${pTitle}`);
      const data = await response.json();
      setLikes(data.likes);
    };
    fetchLikes();
    // Dependency - if this value changes/loads for the first time(mount) -
    // it activates function
  }, [pTitle]);

  const toggleLike = async () => {
    const response = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pTitle,
        action: hasLiked ? "unlike" : "like",
      }),
    });
    const data = await response.json();
    setLikes(data.likes);
    setHasLiked(!hasLiked);
  };

  return (
    <button
      onClick={(e) => {
        (e.preventDefault(),
          // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
          // Stops the bubbling
          e.stopPropagation(),
          toggleLike());
      }}
      className={`z-999 absolute top-3 right-0 w-10 h-10 flex items-center justify-center bg-white cursor-pointer`}
      type="button"
    >
      <svg
        className={`w-7 h-7 text-black fill-red-50 transition-all duration-200 ease-in  ${hasLiked ? "fill-red-500 scale-110" : "fill-red-50 scale-100"}`}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
      </svg>
    </button>
    /* {hasLiked ? "Liked " : "Like "}
      {likes > 0 && <span>{}</span>}  */
  );
}
