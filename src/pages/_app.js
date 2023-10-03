import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/index.css";
import { FirebaseProvider } from "../context/firebase";
import { CommentProvider } from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Fatan Forum</title>
      </Head>
      <CommentProvider>
        <Component {...pageProps} />
      </CommentProvider>
    </>
  );
}
