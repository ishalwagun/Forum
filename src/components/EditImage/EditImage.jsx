// ImageWithCaption.js
import React, { useState } from "react";
import Image from "next/image";

const ImageWithCaption = ({ images, onImageRemove }) => {
  const [captions, setCaptions] = useState(Array(images.length).fill(""));
  const [clickedInputIndex, setClickedInputIndex] = useState(null);

  const handleInputClick = (index) => {
    setClickedInputIndex(index);
  };

  const handleInputBlur = () => {
    setClickedInputIndex(null);
  };

  const handleCaptionChange = (e, index) => {
    const newCaptions = [...captions];
    newCaptions[index] = e.target.value;
    setCaptions(newCaptions);
  };
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedCaptions = captions.filter((_, i) => i !== index);

    // Update the state with the updated images and captions
    setCaptions(updatedCaptions);

    onImageRemove(updatedImages, updatedCaptions);
  };
  return (
    <div className="flex flex-wrap w-full bg-[#47494b] pl-9  ">
      {images.map((imageUrl, index) => (
        <div
          className="pt-3 pl-4"
          key={index}
          style={{
            flex: "0 0 48%",
            boxSizing: "border-box",
            margin: "0",
            paddingBottom: images.length > 0 ? "4rem" : "0",
          }}
        >
          <div className="bg-[#2d3238] rounded-[15px] lg:pb-6 w-full relative ">
            <img
              className="h-52   w-full object-cover items-center  rounded-tr-[15px] mb-2  rounded-tl-[15px]  "
              src={imageUrl}
              alt={`Image ${index}`}
            />
            <div className="absolute top-2 right-2 mt-2  w-[35px] h-[35px] rounded-[25px] bg-[#53595e] flex items-center justify-center hover:opacity-90">
              <button
                className="text-[15px] flex text-white p-3 "
                onClick={() => handleRemoveImage(index)}
              >
                X
              </button>
            </div>
            <input
              type="text"
              value={captions[index]}
              onChange={(e) => handleCaptionChange(e, index)}
              placeholder=" Caption"
              className={
                "placeholder:text-gray-500 outline-none px-4 pt-6 pb-20 border mb-4 " +
                (clickedInputIndex === index
                  ? "hover:border-blue-500"
                  : "border-gray-700") +
                " ml-3 w-[96%] bg-[#2d3238] text-white text-[18px] rounded-lg hover:border-gray-300 break-all"
              }
              style={{ wordWrap: "break-word" }}
              onClick={() => handleInputClick(index)}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageWithCaption;
