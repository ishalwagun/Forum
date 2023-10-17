import React, { useState, useEffect, useRef } from "react";

const tagsData = [
  { tag: "tag", posts: "17M posts" },
  { tag: "yak", posts: "17M posts" },
  { tag: "yeast", posts: "17M posts" },
  { tag: "youht", posts: "17M posts" },
  { tag: "yak", posts: "17M posts" },
  { tag: "yeast", posts: "17M posts" },
  { tag: "youht", posts: "17M posts" },
  { tag: "mag", posts: "17M posts" },
];

export default function PostTag({ typedText, onTagClick, onClose }) {
  const lastWord = typedText.trim().split(" ").pop();
  const filteredTags = tagsData.filter((tagData) =>
    tagData.tag.startsWith(lastWord.slice(1))
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      const tagComponent = document.getElementById("postTagComponent");
      if (tagComponent && !tagComponent.contains(event.target)) {
        onClose(); // Call the onClose function when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      id="postTagComponent"
      className="bg-[#2d3238] w-[70%] shadow-lg  ml-7 top-[54px] rounded absolute z-50"
    >
      {filteredTags.map((tagData, index) => (
        <div
          key={index}
          className="px-6 py-4  text-white hover:bg-[#3b4248] rounded-md cursor-pointer"
          onClick={() => onTagClick(`#${tagData.tag}`)}
        >
          <p className="text-[18px] font-semibold">#{tagData.tag}</p>
          <p className="text-[15px]">{tagData.posts}</p>
        </div>
      ))}
    </div>
  );
}
