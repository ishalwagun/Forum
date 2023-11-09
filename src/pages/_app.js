import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/index.css";

import { CommentProvider } from "@/context/context";
import  Toaster  from "../../toaster";

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Fatan Forum</title>
      </Head>
      <CommentProvider>
        <Component {...pageProps} />
        <Toaster />
      </CommentProvider>
    </>
  );
}
