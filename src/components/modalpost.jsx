// import React from "react";

// const ModalPost = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   const handleClose = (e) => {
//     if (e.target.id === "wrapper") onClose();
//   };
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
//       id="wrapper"
//       onClick={handleClose}
//     >
//       <div className="w-[600px] flex flex-col ">
//         <button className="text-white place-self-end" onClick={() => onClose()}>
//           X
//         </button>
//         <div className="bg-white">Modal</div>
//       </div>
//     </div>
//   );
// };

// export default ModalPost;

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import profile from "/public/icon/profile.png";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [value, setValue] = useState("categories");
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay} id="wrapper" onClick={handleClose}>
      <div className="z-100 bg-[#2d3238] rounded-lg  mx-[30px] lg:mx-0 min-[800px]:w-[600px] min-[1000px]:w-[700px] min-[500px]:w-[500px]  border border-gray-700 ">
        <div className="text-[#E4E6EB] flex items-center py-4 justify-center ">
          <div className="flex">
            <p className="text-[25px] font-bold flex ">Create post</p>
          </div>
          <div className="  w-[50px] h-[50px] rounded-[25px] bg-[#2C353D] flex items-center justify-center ml-auto">
            <a className="" href="#">
              <button
                className="text-[28px] p-[8px] flex "
                onClick={() => onClose()}
              >
                X
              </button>
            </a>
          </div>
        </div>
        <div className="w-[100] h-[.5px] bg-gray-700"></div>
        <div className="p-5">
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-[25px]"
              src={profile}
              alt=""
              width={50}
              height={50}
            ></Image>
            <div>
              <p className="text-[#E4E6EB] font-semibold text-[18px]">
                Isha Lwagun
              </p>
            

              <div className="  ">
                <select
                  value={value}
                  className=" items-center justify-center outline-none mt-[2px] flex py-[4px] px-[8px] gap-[4px] rounded-md bg-[#FFFFFF1A] text-white text-[14px] "
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                >
                  <option
                    value="Categories"
                    className="text-black  bg-[#FFFFFF1A] text-[16px]"
                  >
                    Categories
                  </option>
                  <option
                    value="a"
                    className="text-black  bg-[#FFFFFF1A] text-[16px] "
                  >
                    a
                  </option>
                  <option
                    value="b"
                    className="text-black  bg-[#FFFFFF1A] text-[16px]"
                  >
                    b
                  </option>
                </select>
              </div>
            </div>
          </div>

          {children}

          {/* <div className="flex items-center justify-between border border-gray-700  p-[10px]">
            <p className="text-[15px] font-semibold text-[#E4E6EB]">
              Add to your post
            </p>
            <div onClick={handleImageClick}>
              <Image src={photo} width={30} height={30} alt=""></Image>

              <input
                className="hidden"
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
              />
            </div>
          </div> */}
          <div className=" w-[100%]">
            <button className="py-[12px] mt-[16px] bg-[#FFFFFF33]  w-[100%]  text-[#FFFFFF4D] text-[15px] font-semibold rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
}
