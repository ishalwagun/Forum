import React from "react";

export default function Button(props) {
  return (
    <button className="justify-center text-white px-5 py-3.5  bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px]  text-center dark:bg-blue-600 dark:hover:bg-blue-500 font-500 dark:focus:ring-blue-600 inline-flex items-center">
      {props.title}
    </button>
  );
}
