import { ImageDetail } from "@/components/image-details";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImagePage() {
  let router = useRouter();
  return (
    <div className="relative w-screen h-screen bg-gray-800">
      <Link
        href="/"
        className="relative z-20 flex items-center w-1/2 pt-12 mx-auto text-xl text-white/80 hover:text-white"
      >
        <BackIcon className="w-5 h-5 mr-2" />
        Back
      </Link>

      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen">
          <div className="w-1/2">
            <ImageDetail image={router.query.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { image: "1" } }],
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  return {
    props: {
      image: context.params.image,
    },
  };
}

function BackIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
