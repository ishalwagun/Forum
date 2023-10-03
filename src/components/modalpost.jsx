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
        <div className="  mt-5  mr-2 w-[35px] h-[35px] rounded-[25px] bg-[#39434d] flex items-center justify-center ml-auto">
          <a className="" href="#">
            <button
              className="text-[28px] p-[8px] flex "
              onClick={() => onClose()}
            >
              X
            </button>
          </a>
        </div>

        <div className="px-5 pb-5 ">
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
                  className="  items-center justify-center outline-none mt-[2px] flex py-[4px] px-[8px] gap-[4px] rounded-md bg-[#FFFFFF1A] text-white text-[14px] mb-1 "
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                >
                  <option
                    value="Categories"
                    className="text-black  bg-[#FFFFFF1A] text-[16px] "
                  >
                    Categories
                  </option>
                  <option
                    value="a"
                    className="text-black  bg-[#FFFFFF1A] text-[16px]  "
                  >
                    a
                  </option>
                  <option
                    value="b"
                    className="text-black  bg-[#FFFFFF1A] text-[16px] "
                  >
                    b
                  </option>
                </select>
              </div>
            </div>
          </div>

          {children}

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
