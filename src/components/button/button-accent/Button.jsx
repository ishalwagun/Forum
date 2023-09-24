import React from "react";

export default function Button(props) {
  return (
    <button className="justify-center text-white px-8 py-3.5  bg-[#262d34] hover:bg-[#364049] border border-gray-600 focus:ring-2 focus:outline-none  focus:ring-gray-600   font-medium rounded-xl text-[14px]  text-center  font-500 inline-flex items-center">
      {props.title}
    </button>
  );
}
