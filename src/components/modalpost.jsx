import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import profile from "/public/icon/profile.png";
import Categories from "./modalCategories/Categories";

export default function Modal({ show, onClose, children, modalWidth }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [value, setValue] = useState("categories");
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [showCategories, setShowCategories] = useState(false);

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

  const handleShowCategories = () => {
    setShowCategories(true);
  };

  const handleGoBack = () => {
    setShowCategories(false);
  };

  const modalContent = show ? (
    <div
      className={`${styles.overlay} ${styles.customWidth}`}
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className={`z-100 bg-[#2d3238] rounded-lg  mx-[30px] lg:mx-0 ${modalWidth}    border border-gray-700 fixed`}
      >
        <div className=" pb-5 ">
          {showCategories ? (
            <Categories onGoBack={handleGoBack} />
          ) : (
            <>
              <div className="  mt-5  mr-2 w-[35px] h-[35px] rounded-[25px] bg-[#39434d] flex items-center justify-center ml-auto hover:opacity-75">
                <a className="" href="#">
                  <button
                    className="text-[20px]  flex text-white p-3 "
                    onClick={() => onClose()}
                  >
                    X
                  </button>
                </a>
              </div>
              <div className="flex gap-2 items-center px-5">
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

                  <div
                    className="  items-center justify-center outline-none mt-[2px] flex py-[6px] px-[10px] gap-[4px] rounded-md bg-[#FFFFFF1A] text-white text-[14px] mb-1 hover:cursor-pointer "
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    <p>{showCategories ? "Back to Content" : "Categories"}</p>
                    <Image
                      src="/icon/drop-down.png"
                      width={20}
                      height={20}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>

              {children}

              <div className=" w-[100%] px-5">
                <button className="py-[12px] mt-[16px] bg-[#FFFFFF33]  w-[100%]  text-[#FFFFFF4D] text-[15px] font-semibold rounded-md">
                  Post
                </button>
              </div>
            </>
          )}
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
