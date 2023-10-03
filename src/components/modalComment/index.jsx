import React, { useState, useRef, useContext } from "react";
import { CommentContext } from "@/context/context";
import { Mod } from "../mod";
import Image from "next/image";
import photo from "/public/icon/photoupload.png";
import ReplyPost from "../reply";

function ModalComment({ onClose, props }) {
  const [image, setImage] = useState("");
  const [commentText, setCommentText] = useState("");
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleReply = () => {
    const comment = textareaRef.current.value;
    console.log(comment);
    setCommentText(comment);
    if (comment) {
      setCommentText(comment);
    } else {
      setCommentText("");
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <Mod onClick={closeModal}>
      <div className="bg-[#2d3238]  mx-[30px] lg:mx-0 min-[800px]:w-[600px] min-[1000px]:w-[700px] min-[500px]:w-[500px]  p-5 rounded-2xl  border border-gray-700 mb-auto ">
        <div className="flex justify-between items-center">
          <div className="text-[20px] px-[8px] py-[4px] text-white w-[35px] h-[35px] rounded-[25px] bg-[#39434d] flex items-center justify-center">
            <button onClick={() => onClose()}>X</button>
          </div>

          <div>
            <p className="text-white text-xl">drafts</p>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex gap-4 align-top mt-3">
            <div className="flex  gap-2 flex-col justify-center items-center ">
              <div className="bg-black w-9 h-11 rounded-[10px] text-white flex items-center justify-center">
                <p>F</p>
              </div>
              <div class="border-l h-[100%] border-gray-700"></div>
            </div>

            <div className="mt-1 text-white">
              <div>
                <p className="font-bold mb-2">Forbes @Forbes 18m</p>
                <p className="font-medium text-[9px] md:text-[12px] lg:text-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur ullam velit aperiam. Soluta laborum enim alias quas
                  cupidit Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Asperiores quae soluta temporibus, quo dolorum obcaecati
                  labore rem
                </p>
                <p className="mt-4">
                  <span className="text-[#8e9091] "> Replying to </span>@Forbes
                </p>
              </div>
            </div>
          </div>

          <div className=" flex gap-4 pt-8">
            <div>
              <Image
                className="  rounded-[50%] w-[45px] h-[45px] object-cover "
                src="/1.jpg"
                alt=""
                width={40}
                height={40}
              />
            </div>

            <div className="w-[100%]">
              <textarea
                rows="3"
                className=" w-[100%]  text-white text-xl  bg-[#2d3238] outline-none  placeholder:text-xl 1 max-w-[550px]:break-words
            "
                ref={textareaRef}
                placeholder="Post your reply"
              />
            </div>
          </div>

          {image ? (
            <>
              <div className=" relative p-2">
                <Image
                  className=" mt-[16px] h-40 w-full object-contain items-center  "
                  src={URL.createObjectURL(image)}
                  width={700}
                  height={30}
                  alt=""
                ></Image>

                <div className=" absolute top-2 right-0 md:right-8 lg:right-24  w-[35px] h-[35px] rounded-[25px] bg-[#39434d] flex items-center justify-center ml-auto">
                  <a className="" href="#">
                    <button
                      className="text-[28px] p-[8px] flex "
                      onClick={() => setImage(false)}
                    >
                      X
                    </button>
                  </a>
                </div>
              </div>
            </>
          ) : null}

          <div className="flex justify-between mt-5">
            <div onClick={handleImageClick}>
              <Image src={photo} width={30} height={30} alt=""></Image>

              <input
                className="hidden"
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                multiple
              />
            </div>
            <div>
              <button
                className="bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px]  text-center dark:bg-blue-600 dark:hover:bg-blue-500 font-500 dark:focus:ring-blue-600 inline-flex items-center text-white px-5 py-2"
                onClick={handleReply}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </Mod>
  );
}

export default ModalComment;
