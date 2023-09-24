import React, { useState } from "react";
import classNames from "classnames";

export default function Switch() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        "flex w-14 h-7 bg-[#262d34] rounded-full transition-all duration-500 cursor-pointer border border-gray-700",
        {
          "bg-[#5596E6]": isSelected,
        }
      )}
    >
      <span
        className={classNames(
          "h-[26px] w-[28px] bg-white rounded-full transition-all duration-500 shadow-lg",
          {
            "ml-auto": isSelected,
          }
        )}
      ></span>
    </div>
  );
}
