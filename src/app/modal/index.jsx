import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { Mod } from "../compo/Mod";
import { ImageDetail } from "../compo/Image-details";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Modal = () => {
  let router = useRouter();
  const closeModal = () => {
    router.push("/");
  };
  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);
  return (
    <div>
      {router.isReady && (
        <Mod onClose={closeModal}>
          <ImageDetail image={router.query.image} />
        </Mod>
      )}
      <Carousel className="mt-10">
        <Link
          href="/?image=1"
          as="/1"
          className="block text-center no-underline "
        >
          <div className="w-[100%] h-40 overflow-hidden flex justify-center items-center image-container">
            <Image
              src="/1.jpg"
              alt=""
              layout="fill"
              className=" w-[100%]  object-cover carousel-image"
            />
          </div>
        </Link>
        <Link
          href="/?image=1"
          as="/1"
          className="block text-center no-underline "
        >
          <div className="w-[100%] h-40 overflow-hidden flex justify-center items-center image-container">
            <Image
              src="/1.jpg"
              alt=""
              layout="fill"
              className=" w-[100%]  object-cover carousel-image"
            />
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Modal;
