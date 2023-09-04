import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { useSearchParams, useRouter } from "next/navigation";
import { ImageDetail } from "@/components/Image-details";
import { Mod } from "@/components/Mod";

const Modal = () => {
  let param = useSearchParams();
  let router = useRouter();
  const closeModal = () => {
    router.push("/");
  };

  return (
    <div>
      {param.get("image") && (
        <Mod onClose={closeModal}>
          <ImageDetail image={param.get("image")} />
        </Mod>
      )}
      <Carousel className="mt-10" showThumbs={false}>
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
